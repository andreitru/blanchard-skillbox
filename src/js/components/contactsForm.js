import Inputmask from '../vendor/inputmask.min';
import '../vendor/just-validate.min';

var phone = document.getElementById('phone');
var im = new Inputmask('+7 (999) 999-99-99');
im.mask(phone);

new window.JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    phone: {
      required: true,
      function: () => {
        const tel = phone.inputmask.unmaskedvalue();
        return Number(tel) && tel.length === 10
      }
    },
  },
  messages: {
    name: {
      required: 'Введите Ваше имя',
      minLength: 'Имя должно быть длиннее 2-х символов',
      maxLength: 'Имя должно быть короче 30 символов'
    },
    phone: 'Укажите Ваш телефон',
  },
  tooltip: {
    fadeOutTime: 10000
  }
});
