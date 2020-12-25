import vars from '../_vars';

let showedAll = false;

vars.$eventsShowAll.addEventListener('click', (event) => {
  vars.$events.forEach(item => {
    item.classList.remove('event--hidden');
  })
  showedAll = true;
  event.currentTarget.style.display = 'none';
})

// в зависимости от ширины экрана показываем 3 или 2 события
export default function changeShowedEvents(width) {
  if (width > 992 && !showedAll) {
    for (let i = 0; i < 3; i++) {
      vars.$events[i].classList.remove('event--hidden');
    }
  } else if (width > 576 && width <= 992 && !showedAll) {
    for (let i = 2; i < vars.$events.length; i++) {
      vars.$events[i].classList.add('event--hidden');
    }
  }
}
// end

