const form = document.getElementById('form');
const container = document.querySelector('.contact-container');

form.addEventListener('sumbit', (e) => {
   e.preventDefault();
   container.innerHTML = '<p>Thanks for your message. <br /> I\'Ill get back to you soon. :D </p>';
});

