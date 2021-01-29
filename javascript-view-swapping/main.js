var tabContainer = document.querySelector('.tab-container');
var allTabElements = document.querySelectorAll('.tab');
var allViewElements = document.querySelectorAll('.view');

tabContainer.addEventListener('click', handleTabSwap);

function handleTabSwap(event) {
  if (event.target.matches('.tab')) {
    var dataView = event.target.getAttribute('data-view');
    for (const tab of allTabElements) {
      if (tab === event.target) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    }
    for (const view of allViewElements) {
      if (view.getAttribute('data-view') === dataView) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    }
  }
}
