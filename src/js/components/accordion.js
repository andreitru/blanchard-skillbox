import $ from 'jquery';
import vars from '../_vars';

$(function () {
  $("#accordion").accordion({
    heightStyle: "content",
    icons: false,
  });
});

let items = 0;

function changeListHeight() {
  vars.$accordionList.forEach(function (item) {
    let i = item.querySelectorAll('li').length;
    if (i > items) {
      items = i;
    }
    if (document.body.clientWidth > 1200) {
      item.style.height = (items / 3) * 36 + 'px';
    } else if (document.body.clientWidth < 1200 && document.body.clientWidth > 992) {
      item.style.height = (items / 2) * 34 + 'px';
    } else if (document.body.clientWidth <= 992 && document.body.clientWidth > 700) {
      item.style.height = (items / 3) * 36 + 'px';
    } else if (document.body.clientWidth < 700 && document.body.clientWidth > 500) {
      item.style.height = (items / 2) * 36 + 'px';
    } else {
      item.style.height = items * 32 + 'px';
    }
  })
}

window.onload = changeListHeight;
window.onresize = changeListHeight;

