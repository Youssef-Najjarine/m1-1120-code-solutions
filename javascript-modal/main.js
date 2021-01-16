var button = document.querySelector('button');

button.addEventListener('click', lightUp);
document.querySelector('.blackBox button').addEventListener('click', removeModal);
function lightUp() {
  document.querySelector('.blackBox').classList.add('active');
}
function removeModal() {
  document.querySelector('.blackBox').classList.remove('active');
}
