import vars from '../_vars';

// выпадающий список в Header
function showHeaderSelect(item, event) {
  item.querySelectorAll('.header-select__item').forEach(i => {
    i.setAttribute('tabindex', '0');
  });

  vars.$headerSelect.forEach((i) => {
    if (i !== event.currentTarget) {
      i.classList.remove('header-select--showed');
      const iSubSelect = i.querySelector('.header-select__item--subselect');
      if (iSubSelect) {
        iSubSelect.classList.remove('header-select__item--showed');
        vars.$headerSubSelect.forEach(select => {
          select.classList.remove('header-select--showed');
        })
      }

      vars.$headerSelectTitles.forEach(title => {
        title.setAttribute('aria-expanded', 'false');
      })
    }
  })

  event.currentTarget.classList.toggle('header-select--showed');

  const subSelect = item.querySelector('.header-select__item--subselect');
  const selectItems = item.querySelectorAll('.header-select__item');

  selectItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (item.classList.contains('header-select__item--subselect')) {
        e.preventDefault();
        e.stopPropagation();
      }
    })

    if (subSelect) {
      subSelect.addEventListener('click', (e) => {
        const subSelectTitle = e.currentTarget.querySelector('.header-select__top');
        vars.$headerSubSelect.forEach(select => {
          if (select.dataset.subselect === subSelectTitle.innerText) {
            select.classList.toggle('header-select--showed');
            subSelect.classList.toggle('header-select__item--showed');
          }
        })

        if (subSelect.classList.contains('header-select__item--showed')) {
          subSelectTitle.setAttribute('aria-expanded', 'true');
        } else {
          subSelectTitle.setAttribute('aria-expanded', 'false');
        }
      })
    }
  })

  if (event.currentTarget.classList.contains('header-select--showed')) {
    item.querySelector('.header-select__top').setAttribute('aria-expanded', 'true');
  } else {
    item.querySelector('.header-select__top').setAttribute('aria-expanded', 'false');
    if (subSelect) {
      subSelect.classList.remove('header-select__item--showed');
      vars.$headerSubSelect.forEach(select => {
        select.classList.remove('header-select--showed');
      })
    }

  }
}

vars.$headerSelect.forEach((item) => {
  item.addEventListener('click', function (event) {
    showHeaderSelect(item, event);
  })
})

vars.$headerSelect.forEach((item) => {
  item.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      showHeaderSelect(item, event);
    } else if (event.keyCode === 27) {
      event.currentTarget.classList.remove('header-select--showed');
      item.querySelector('.header-select__top').setAttribute('aria-expanded', 'false');
    }
  })
})
// end

// выпадающий список в Gallery
function showGallerySelect(event) {

  event.currentTarget.classList.toggle('gallery-select--showed');

  if (event.currentTarget.classList.contains('gallery-select--showed')) {
    vars.$gallerySelectTitle.setAttribute('aria-expanded', 'true');
  } else {
    vars.$gallerySelectTitle.setAttribute('aria-expanded', 'false');
  }

  vars.$gallerySelect.querySelectorAll('.header-select__item').forEach(i => {
    i.setAttribute('tabindex', '0');
  });
}

vars.$gallerySelect.addEventListener('click', function (event) {
  showGallerySelect(event);
})

vars.$gallerySelect.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    showGallerySelect(event);
  } else if (event.keyCode === 27) {
    event.currentTarget.classList.remove('gallery-select--showed');
    vars.$gallerySelectTitle.setAttribute('aria-expanded', 'false');
  }
})
// end

// выпадающий список в Editions
vars.$categoriesTitle.addEventListener('click', function (event) {
  event.currentTarget.classList.toggle('categories__title--showed');
  vars.$categoriesItem.forEach((item) => {
    item.classList.toggle('categories__item--showed');
  })
})
// end


