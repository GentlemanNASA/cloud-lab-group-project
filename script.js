<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for reaching out to Cyber G6. We will respond soon.');
    contactForm.reset();
  });
});
=======
 function handleSubmit() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const feedback = document.getElementById('form-feedback');

      if (!name || !email || !message) {
        feedback.style.color = '#d93025';
        feedback.textContent = 'Please fill in your name, email, and message.';
        feedback.style.display = 'block';
        return;
      }

      feedback.style.color = 'var(--accent)';
      feedback.textContent = '✓ Message sent! We\'ll get back to you soon.';
      feedback.style.display = 'block';

      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
    }
>>>>>>> 7e1fba341985e723fcd0b9b8d9dc198364c08c8b
