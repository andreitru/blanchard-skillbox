import vars from '../_vars';
import {onResize} from '../functions/onresize';

// переключение блоков табов с выбором страны
function changeCountry(evt) {
  vars.$flagsItems.forEach((i => {
    if (i !== evt.currentTarget) {
      i.classList.remove('flags__item--active');
    }
  }))

  evt.currentTarget.classList.add('flags__item--active');

  let country = evt.currentTarget.dataset.flag;

  vars.$accordionLists.forEach(list => {
    list.querySelector('.accordion__list--active').classList.remove('accordion__list--active');
    list.querySelector(`[data-country=${country}]`).classList.add('accordion__list--active');
  })
  onResize();
}

vars.$flagsItems.forEach(item => {
  item.addEventListener('click', (evt => {
    changeCountry(evt);
  }));
})

vars.$flagsItems.forEach(item => {
  item.addEventListener('keydown', (evt => {
    if (evt.keyCode === 13) {
      changeCountry(evt);
    }
  }));
})
// end

// изменение художника по клику в аккордеоне
const otherPainter = vars.$painters[vars.$painters.length - 1]; // карточка заглушка если нет отдельной карточки на художника

vars.$accordionItem.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    const isMobile = document.body.clientWidth <= 992;
    if (isMobile) {
      document.querySelector('.catalog-bottom__left').scrollIntoView();
    }

    vars.$accordionItem.forEach(item => {
      item.querySelector('.accordion__link').classList.remove('accordion__link--active');
    })

    let isPainter = false;

    vars.$painters.forEach(painter => {
      painter.classList.remove('painter--active');

      let painterName = painter.querySelector('.painter__name').innerText;

      if (painterName === event.currentTarget.innerText) {
        painter.classList.add('painter--active');
        item.querySelector('.accordion__link').classList.add('accordion__link--active');
        isPainter = true;
      }
    })

    if (!isPainter) { // если нет карточки на художника - показываем карточку заглушку
      otherPainter.querySelector('.painter__name').innerText = event.currentTarget.innerText;
      item.querySelector('.accordion__link').classList.add('accordion__link--active');
      otherPainter.classList.add('painter--active');
    }
  })
})
// end
