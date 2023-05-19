const tabContainer = document.querySelector('.tab-container');
const tab = document.querySelectorAll('.tab');
const view = document.querySelectorAll('.view');

function handleClick(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === event.target) {
      tab[i].className = 'tab active';
    } else {
      tab[i].className = 'tab';
    }
    const dataView = event.target.getAttribute('data-view');
    for (let j = 0; j < view.length; j++) {
      if (view[j].getAttribute('data-view') === dataView) {
        view[j].className = 'view';
      } else {
        view[j].className = 'view hidden';
      }
    }
  }
}
tabContainer.addEventListener('click', handleClick);
