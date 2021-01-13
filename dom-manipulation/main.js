var counter = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', handleClick);

function handleClick() {
  var temperature;
  counter++;
  // console.log(counter);
  $clickCount.textContent = 'Clicks: ' + counter;
  if (counter < 4) {
    temperature = 'cold';
  } else if (counter < 7) {
    temperature = 'cool';
  } else if (counter < 10) {
    temperature = 'tepid';
  } else if (counter < 13) {
    temperature = 'warm';
  } else if (counter < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temperature;
}
