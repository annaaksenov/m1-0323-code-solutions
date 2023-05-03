function handleClick(event) {
  console.log('button clicked', event, event.target);
}
const $click = document.querySelector('.click-button');
$click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered', event, event.target);
}
const $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked', event, event.target);
}
const $dbl = document.querySelector('.double-click-button');
$dbl.addEventListener('dblclick', handleDoubleClick);
