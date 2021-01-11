import vars from "../_vars";
import {sliders} from "../components/sliders";
import {map, myMap} from "../components/map";

// изменение высоты списка в аккордеоне (блок "Каталог") в зависимости от ширины экрана
function changeListHeight(width) {
  let items = 0;
  vars.$accordionList.forEach(function (item) {
    let amountOfItems = item.querySelectorAll('li').length;
    if (amountOfItems > items) {
      items = amountOfItems;
    }
    if (width > 1200) {
      item.style.height = (items / 3) * 36 + 'px';
    } else if (width < 1200 && width > 992) {
      item.style.height = (items / 2) * 34 + 'px';
    } else if (width <= 992 && width > 700) {
      item.style.height = (items / 3) * 36 + 'px';
    } else if (width < 700 && width > 500) {
      item.style.height = (items / 2) * 36 + 'px';
    } else {
      item.style.height = items * 32 + 'px';
    }
  })
}

// end

// изменение высоты списка категорий в блоке "Издания" в зависимости от ширины экрана
let elemAmount = vars.$editionsList[0].children.length;

function changeCategoryHeight(width) {
  if (width < 768 && width > 576) {
    vars.$editionsList[0].style.height = (elemAmount / 2) * 40 + 'px';
  } else {
    vars.$editionsList[0].style.height = null;
  }
}
// end

// запуск функция, зависящих от ширины экрана
export function onResize() {
  let width = document.body.clientWidth;
  changeListHeight(width);
  changeCategoryHeight(width);
  sliders(width);
  if (myMap !== undefined) {
    map(width);
  }
}

window.onload = onResize;
window.onresize = onResize;
// end
