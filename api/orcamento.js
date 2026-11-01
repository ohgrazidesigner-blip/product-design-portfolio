/* Criativas — função serverless para pedidos de orçamento na Vercel.
 * Nunca coloque credenciais ou o email de destino no HTML ou neste ficheiro.
 */

const SERVICES = new Set([
  'Landing page', 'Website institucional', 'Loja online',
  'Redesign / UX/UI', 'Ainda não sei',
]);
const DEADLINES = new Set([
  'Não definido', 'Nas próximas semanas',
  'Nos próximos 2–3 meses', 'Sem urgência',
]);
const MAX_BODY_BYTES = 12_000;

function reply(body, status = 200, extraHeaders = {}) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      ...extraHeaders,
    },
  });
}

const normalized = (value) => typeof value === 'string' ? value.trim() : '';
const isEmail = (value) => /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value);

async function parseBody(request) {
  const length = Number(request.headers.get('content-length') || 0);
  if (length > MAX_BODY_BYTES) throw new Error('too-large');
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/json') &&
      !contentType.includes('application/x-www-form-urlencoded')) {
    throw new Error('unsupported');
  }
  const body = await request.text();
  if (new TextEncoder().encode(body).length > MAX_BODY_BYTES) throw new Error('too-large');
  if (contentType.includes('application/json')) return JSON.parse(body);
  return Object.fromEntries(new URLSearchParams(body));
}

export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return reply({ ok: false, message: 'Método não permitido.' }, 405, { Allow: 'POST' });
    }

    // Bloqueia submissões cross-origin de navegadores. Não substitui proteção anti-spam.
    const origin = request.headers.get('origin');
    if (origin && origin !== new URL(request.url).origin) {
      return reply({ ok: false, message: 'Origem não autorizada.' }, 403);
    }

    let data;
    try {
      data = await parseBody(request);
    } catch (error) {
      const status = error.message === 'too-large' ? 413 : error.message === 'unsupported' ? 415 : 400;
      return reply({ ok: false, message: 'Não foi possível interpretar o pedido.' }, status);
    }
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return reply({ ok: false, message: 'Pedido inválido.' }, 400);
    }

    // Campo invisível do formulário: um bot que o preencher não origina mensagem.
    if (normalized(data.website)) {
      return reply({ ok: true, message: 'Pedido recebido. Obrigado!' });
    }

    const nome = normalized(data.nome);
    const empresa = normalized(data.empresa);
    const email = normalized(data.email);
    const servico = normalized(data.servico);
    const prazo = normalized(data.prazo) || 'Não definido';
    const mensagem = normalized(data.mensagem);

    if (nome.length < 2 || nome.length > 100 ||
        empresa.length > 120 || email.length > 160 || !isEmail(email) ||
        !SERVICES.has(servico) || !DEADLINES.has(prazo) ||
        mensagem.length < 10 || mensagem.length > 2000) {
      return reply({ ok: false, message: 'Confira os campos e tente novamente.' }, 400);
    }

    const { RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
    if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !CONTACT_TO_EMAIL) {
      console.error('Criativas: ambiente de envio incompleto.');
      return reply({ ok: false, message: 'O formulário está temporariamente indisponível.' }, 503);
    }

    const text = [
      'NOVO PEDIDO DE ORÇAMENTO — CRIATIVAS',
      `Nome: ${nome}`,
      `Empresa: ${empresa || 'Não informada'}`,
      `Email: ${email}`,
      `Serviço: ${servico}`,
      `Prazo: ${prazo}`,
      '',
      'Detalhes do projeto:',
      mensagem,
    ].join('\n');

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: RESEND_FROM_EMAIL,
          to: [CONTACT_TO_EMAIL],
          reply_to: email,
          subject: `Criativas | Pedido de orçamento: ${servico}`,
          text,
        }),
        signal: AbortSignal.timeout(10000),
      });

      if (!response.ok) {
        console.error('Criativas: serviço de envio recusou o pedido.', response.status);
        return reply({ ok: false, message: 'Não conseguimos enviar agora. Tente novamente em instantes.' }, 502);
      }
      return reply({ ok: true, message: 'Pedido enviado! Entraremos em contacto em breve.' });
    } catch {
      console.error('Criativas: serviço de envio indisponível.');
      return reply({ ok: false, message: 'Não conseguimos enviar agora. Tente novamente em instantes.' }, 502);
    }
  },
};
