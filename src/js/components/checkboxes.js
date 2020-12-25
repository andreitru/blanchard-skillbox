import vars from "../_vars";

function checkCategory(event, item) {
  let input = item.querySelector('input');

  input.checked ? input.checked = false : input.checked = true;

  if (input.checked) {
    item.classList.add('checked');
  } else {
    item.classList.remove('checked');
  }
}

vars.$categoriesItem.forEach((item) => {
  item.addEventListener('click', function (event) {
    checkCategory(event, item);
  })
})

vars.$categoriesItem.forEach((item) => {
  item.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      checkCategory(event, item);
    }
  })
})
