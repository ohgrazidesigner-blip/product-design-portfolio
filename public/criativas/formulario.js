document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('brief-form');
const submitButton = form.querySelector('button[type="submit"]');
const feedback = document.getElementById('form-feedback');
const originalLabel = submitButton.textContent;

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity() || submitButton.disabled) return;

  submitButton.disabled = true;
  submitButton.textContent = 'A enviar…';
  form.setAttribute('aria-busy', 'true');
  feedback.hidden = true;
  feedback.textContent = '';

  try {
    const payload = Object.fromEntries(new FormData(form).entries());
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.message || 'Falha no envio.');
    feedback.className = 'form-feedback success';
    feedback.textContent = result.message || 'Pedido enviado! Entraremos em contacto em breve.';
    form.reset();
  } catch (error) {
    feedback.className = 'form-feedback error';
    feedback.textContent = error.message || 'Não conseguimos enviar agora. Tente novamente.';
  } finally {
    feedback.hidden = false;
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
    form.removeAttribute('aria-busy');
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});
