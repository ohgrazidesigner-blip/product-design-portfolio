# Criativas no portfólio — publicação controlada

A landing fica em `public/criativas/index.html` e a Vercel Function em `api/orcamento.js`. Não se altera o `index.html`, o React nem a navegação do portfólio. A rota esperada após a publicação é `https://portfolio-grazi.vercel.app/criativas/`. A diretiva `noindex,nofollow` pede aos motores de busca que não indexem a página, mas **não é controlo de acesso**.

## Configurar a entrega das mensagens

No projeto Vercel que hospeda este repositório, configure em **Settings → Environment Variables** (em Preview para testar e Production antes de publicar) as três variáveis privadas abaixo. Não as coloque no GitHub, no HTML ou em mensagens públicas:

- `RESEND_API_KEY`: chave de API do Resend criada na sua própria conta.
- `RESEND_FROM_EMAIL`: remetente aprovado no Resend, associado a domínio verificado (exemplo meramente ilustrativo: `Criativas <orcamentos@seudominio.com>`).
- `CONTACT_TO_EMAIL`: endereço privado que receberá os pedidos, inclusive um Gmail se preferir.

A Vercel executa a API, mas a **entrega de email depende do Resend**. O formulário não anuncia sucesso quando a configuração estiver ausente: a API responde 503, e falhas no Resend respondem 502. Nunca envie chaves para um chat ou commit. Após configurar variáveis, faça novo deploy se necessário.

## Validação necessária antes de publicar o link no Instagram

1. Confirmar que a Preview serve `/criativas/`, `base.css`, `ajustes.css` e `formulario.js` e que a home do portfólio não mudou.
2. Executar `npm run build` e `node --test tests/criativas-orcamento.test.js`.
3. Configurar o domínio remetente, as variáveis de ambiente e enviar um pedido real de teste. Conferir a chegada ao destinatário e a possibilidade de responder ao cliente.
4. Configurar proteção anti-abuso adequada ao tráfego (por exemplo rate limiting ou CAPTCHA). Honeypot e verificação de Origin são controles iniciais, não proteção completa.
5. Publicar um aviso de privacidade adequado ao tratamento dos dados enviados pelo formulário antes de divulgar a landing.
6. Só então aprovar/mesclar a PR e verificar de novo a URL de produção. Não divulgar uma página com formulário ainda não configurado.

Os testes automatizados simulam o Resend: não provam a entrega de um email real. `noindex` não substitui autenticação.
