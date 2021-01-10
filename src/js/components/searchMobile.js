import vars from '../_vars';

const searchBtn = vars.$searchMobile.querySelectorAll('button');

searchBtn.forEach(item => {
  item.addEventListener('click', (event) => {
    vars.$searchMobile.classList.toggle('search--showed');
    document.querySelector('.header-top__container').classList.toggle('header-top__container--mobile');
  })
})

