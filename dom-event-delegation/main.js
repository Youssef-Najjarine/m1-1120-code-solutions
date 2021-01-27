var taskList = document.querySelectorAll('.task-list');

for (const task of taskList) {
  task.addEventListener('click', handleClick);
}

function handleClick(event) {
  // console.log(event.target);
  // console.log(event.target.tagName);
  var li = event.target.closest('.task-list-item');
  // console.log(li);
  li.remove();
}
