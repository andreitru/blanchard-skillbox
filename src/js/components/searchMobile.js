import vars from '../_vars';

const searchBtn = vars.$searchMobile.querySelector('svg');

searchBtn.addEventListener('click', (event) => {
  vars.$searchMobile.classList.toggle('search--showed');
})
