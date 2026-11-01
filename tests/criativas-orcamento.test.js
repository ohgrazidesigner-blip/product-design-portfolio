import { after, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import handler from '../api/orcamento.js';

const initialFetch = globalThis.fetch;
const envNames = ['RESEND_API_KEY', 'RESEND_FROM_EMAIL', 'CONTACT_TO_EMAIL'];
const initialEnv = Object.fromEntries(envNames.map((name) => [name, process.env[name]]));
const valid = {
  nome: 'Cliente Exemplo', empresa: 'Empresa Teste', email: 'cliente@example.org',
  servico: 'Landing page', prazo: 'Não definido', mensagem: 'Gostaria de uma proposta para landing page.',
  website: '',
};
const url = 'https://criativas-example.vercel.app/api/orcamento';
function req(data = valid, options = {}) {
  return new Request(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: 'https://criativas-example.vercel.app', ...options.headers },
    body: JSON.stringify(data),
  });
}

beforeEach(() => {
  process.env.RESEND_API_KEY = 'fake_key_testing';
  process.env.RESEND_FROM_EMAIL = 'Criativas <sender@example.org>';
  process.env.CONTACT_TO_EMAIL = 'owner@example.org';
  globalThis.fetch = async () => Response.json({ id: 'simulated-id' }, { status: 200 });
});
after(() => {
  globalThis.fetch = initialFetch;
  for (const [key, value] of Object.entries(initialEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});

test('envia somente ao endereço privado configurado no servidor', async () => {
  let captured;
  globalThis.fetch = async (endpoint, options) => {
    captured = { endpoint, payload: JSON.parse(options.body) };
    return Response.json({ id: 'simulated-id' }, { status: 200 });
  };
  const response = await handler.fetch(req());
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
  assert.equal(captured.endpoint, 'https://api.resend.com/emails');
  assert.deepEqual(captured.payload.to, ['owner@example.org']);
  assert.equal(captured.payload.reply_to, valid.email);
});

test('não envia dados inválidos', async () => {
  globalThis.fetch = () => { throw new Error('não deve enviar'); };
  for (const payload of [
    { ...valid, nome: 'X' },
    { ...valid, email: 'invalido' },
    { ...valid, servico: 'Serviço inventado' },
    { ...valid, mensagem: 'curta' },
  ]) {
    const response = await handler.fetch(req(payload));
    assert.equal(response.status, 400);
    assert.equal((await response.json()).ok, false);
  }
});

test('honeypot interrompe envio automatizado', async () => {
  globalThis.fetch = () => { throw new Error('não deve enviar'); };
  const response = await handler.fetch(req({ ...valid, website: 'spam-link' }));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
});

test('sem configuração não simula sucesso', async () => {
  delete process.env.RESEND_API_KEY;
  const response = await handler.fetch(req());
  assert.equal(response.status, 503);
  assert.equal((await response.json()).ok, false);
});

test('erro de entrega não simula sucesso', async () => {
  globalThis.fetch = async () => Response.json({ error: 'mock error' }, { status: 403 });
  const response = await handler.fetch(req());
  assert.equal(response.status, 502);
  assert.equal((await response.json()).ok, false);
});

test('recusa requisição de origem externa', async () => {
  const response = await handler.fetch(req(valid, { headers: { origin: 'https://site-externo.example' } }));
  assert.equal(response.status, 403);
});

test('aceita apenas POST', async () => {
  const response = await handler.fetch(new Request(url));
  assert.equal(response.status, 405);
  assert.equal(response.headers.get('allow'), 'POST');
});

test('frontend não revela endereço de destino nem credenciais', () => {
  const html = readFileSync(new URL('../public/criativas/index.html', import.meta.url), 'utf8');
  const js = readFileSync(new URL('../public/criativas/formulario.js', import.meta.url), 'utf8');
  assert.match(html, /action="\/api\/orcamento"/);
  assert.match(js, /fetch\(form\.action/);
  assert.doesNotMatch(html + js, /formspree|mailto:|faleconosco47|RESEND_API_KEY|SEU_ID_AQUI/i);
});
