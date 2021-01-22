var contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();
  var email = contactForm.elements.email.value;
  var name = contactForm.elements.name.value;
  var message = contactForm.elements.message.value;
  var data = { email, name, message };
  console.log(data);
  contactForm.reset();
}
