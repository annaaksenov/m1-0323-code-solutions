const click = document.querySelector('.task-list');

function handleClick(event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName: ' + event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    const ancestor = event.target.closest('.task-list-item');
    console.log('closest .tast-list-item', ancestor);
    ancestor.remove();
  }
}
click.addEventListener('click', handleClick);
