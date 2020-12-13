import vars from "../_vars";

let elemAmount = vars.$editionsList[0].children.length;

function changeCategoryHeight() {
  if (document.body.clientWidth < 768 && document.body.clientWidth > 576) {
    vars.$editionsList[0].style.height = (elemAmount / 2) * 40 + 'px';
  } else {
    vars.$editionsList[0].style.height = null;
  }
}

window.onload = changeCategoryHeight;
window.onresize = changeCategoryHeight;
