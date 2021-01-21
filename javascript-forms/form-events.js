function handleFocus(event) {
  console.log('focus');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur');
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var input1 = document.querySelector('#user-name');
input1.addEventListener('focus', handleFocus);
input1.addEventListener('blur', handleBlur);
input1.addEventListener('input', handleInput);

var input2 = document.querySelector('#user-email');
input2.addEventListener('focus', handleFocus);
input2.addEventListener('blur', handleBlur);
input2.addEventListener('input', handleInput);

var textArea = document.querySelector('#user-message');
textArea.addEventListener('focus', handleFocus);
textArea.addEventListener('blur', handleBlur);
textArea.addEventListener('input', handleInput);
