/* eslint-disable import/extensions */
import myTitle from './title.js';
import myTextarea from './textarea.js';
import myKeyboard from './keyboard.js';

const main = document.createElement('main');
main.classList.add('main');
document.body.append(main);

const p1 = document.createElement('p');
p1.innerHTML = 'Клавиатура создана в операционной системе Windows';
const p2 = document.createElement('p');
p2.innerHTML = 'Перечлючение языка LeftShift+LeftAlt';

const textarea = myTextarea.init();

function setLocalStorage() {
  localStorage.setItem('lang', myKeyboard.lang);
  localStorage.setItem('isCaps', myKeyboard.isCapsOn.toString());
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    let isCaps = false;
    if (localStorage.getItem('isCaps') === 'true') {
      isCaps = true;
    }
    myKeyboard.checkCaps(isCaps);
    myKeyboard.checkLang(lang);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  main.append(myTitle.init());
  main.append(textarea);
  main.append(myKeyboard.init());
  getLocalStorage();
  main.append(p1);
  main.append(p2);
  myKeyboard.keyInput(textarea);
});

window.addEventListener('keydown', (e) => {
  myKeyboard.highLightKeys(e);
  if (e.key === 'CapsLock') {
    myKeyboard.triggerCaps(document.querySelector('.caps'));
  }
  if (e.code === 'ShiftLeft') {
    myKeyboard.triggerShift();
    if (e.altKey) {
      myKeyboard.switchLang();
    }
  }
  if (e.code === 'ShiftRight') {
    myKeyboard.triggerShift();
  }
  if (e.code === 'AltLeft' && e.shiftKey) {
    myKeyboard.switchLang();
  }
  if (e.code === 'Tab') {
    e.preventDefault();
    textarea.value += '    ';
  }
});

window.addEventListener('keyup', (e) => {
  myKeyboard.lowLightKeys(e);
  if (e.code === 'ShiftLeft') {
    myKeyboard.triggerShift();
  }
  if (e.code === 'ShiftRight') {
    myKeyboard.triggerShift();
  }
});

window.addEventListener('click', () => {
  textarea.focus();
});

window.addEventListener('beforeunload', setLocalStorage());
