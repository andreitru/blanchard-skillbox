import vars from '../_vars';

function openBurger() {
  vars.$nav.classList.add('nav--opened');
  vars.$closeBtn.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeBurger() {
  vars.$nav.classList.remove('nav--opened');
  vars.$closeBtn.style.display = 'none';
  document.body.style.overflow = 'unset';
}

vars.$burger.addEventListener('click', () => {
  openBurger();
})

vars.$closeBtn.addEventListener('click', () => {
  closeBurger();
})

vars.$nav.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav__link') || event.target.classList.contains('nav__btn')) {
    closeBurger();
  }
})
