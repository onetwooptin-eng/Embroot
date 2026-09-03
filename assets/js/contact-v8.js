(() => {
  'use strict';
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const statusBox = document.querySelector('[data-contact-status]');
  const button = form.querySelector('button[type="submit"]');
  const submittedAt = form.querySelector('input[name="submitted_at"]');
  const endpointEmail = (window.EMBERROOT_CONFIG && window.EMBERROOT_CONFIG.email) || 'sales@emberrootbiofuels.com';
  const endpoint = `https://formsubmit.co/ajax/${endpointEmail}`;

  const showStatus = (kind, message) => {
    if (!statusBox || !message) return;
    statusBox.textContent = message;
    statusBox.classList.remove('is-success', 'is-error');
    statusBox.classList.add('is-visible', kind === 'sent' ? 'is-success' : 'is-error');
    statusBox.setAttribute('tabindex', '-1');
    statusBox.focus({ preventScroll: true });
  };

  form.addEventListener('submit', async (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      showStatus('error', form.dataset.invalid);
      return;
    }

    event.preventDefault();
    if (submittedAt) submittedAt.value = String(Math.floor(Date.now() / 1000));
    if (button) {
      button.disabled = true;
      button.dataset.originalText = button.textContent;
      button.textContent = form.dataset.sending;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload._subject = payload.subject ? `EmberRoot enquiry: ${payload.subject}` : 'New EmberRoot website enquiry';
    payload._template = 'table';
    payload._url = window.location.href;
    payload._honey = payload.company_website || payload._honey || '';
    delete payload.company_website;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error(result.message || 'Submission failed');
      showStatus('sent', form.dataset.success);
      form.reset();
      if (submittedAt) submittedAt.value = String(Math.floor(Date.now() / 1000));
    } catch (error) {
      showStatus('error', form.dataset.mailError);
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = button.dataset.originalText || button.textContent;
      }
    }
  });
})();
