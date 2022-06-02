'use strict';

const ipProtected = document.querySelector('.ip-protected'),
  ipProtectedClose = document.querySelector('.ip-protected__close'),
  menuBody = document.querySelector('.menu-body'),
  iconMenu = document.querySelector('.icon-menu'),
  menuItem = document.querySelectorAll('.menu__item');


ipProtectedClose.addEventListener('click', (e) => {
  ipProtected.classList.add('_block-up');
});

menuItem.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target.closest('._active');
    if (!event.target.classList.contains('_active')) {
      let activeElem = document.querySelectorAll('.menu__item._active');
      activeElem.forEach((e) => {
        removeActive(e);
      });
    }
    if (!target) {
      addActive(e);
    }
  });
});

window.addEventListener('click', (event) => {
  if (!event.target.matches('.menu-link')) {
    menuItem.forEach((e) => {
      if (!event.target.classList.contains('_active')) {
        removeActive(e);
      }
    });
  }
});

if (iconMenu) {
  iconMenu.addEventListener('click', function () {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_open');
    menuBody.classList.toggle('_open');
  });
}

function addActive(item) {
  item.classList.toggle('_active');
}

function removeActive(item) {
  if (item.classList.contains('_active')) {
    item.classList.remove('_active');
  }
}