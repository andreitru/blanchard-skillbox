import vars from '../_vars';

const searchBtns = vars.$searchMobile.querySelectorAll('button');

searchBtns.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    vars.$searchMobile.classList.toggle('search--showed');
    document.querySelector('.header-top__container').classList.toggle('header-top__container--mobile');
  })
})

