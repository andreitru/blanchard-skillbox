import vars from '../_vars';

vars.$eventsShowAll.addEventListener('click', (event) => {
  vars.$events.forEach(item => {
    item.style.display = 'block';
  })

  event.currentTarget.style.display = 'none';
})


