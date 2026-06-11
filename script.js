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
