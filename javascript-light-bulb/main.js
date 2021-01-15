var button = document.querySelector('button');

button.addEventListener('click', lightUp);

function lightUp() {
  document.body.classList.toggle('light');
}
