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
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
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
  if (e.code === 'ShiftLeft') {
    myKeyboard.shiftOn();
    if (e.altKey) {
      myKeyboard.switchLang();
    }
  }
  if (e.code === 'ShiftRight') {
    myKeyboard.shiftOn();
  }
  if (e.code === 'AltLeft' && e.shiftKey) {
    myKeyboard.switchLang();
  }
  if (e.code === 'Tab') {
    textarea.value += '    ';
  }
});

window.addEventListener('keydown', function triggerCaps(e) {
  if (e.key === 'CapsLock') {
    if (myKeyboard.isCapsOn) {
      myKeyboard.capsOff();
      document.querySelector('.caps').classList.remove('pressed')
      this.removeEventListener('keydown', triggerCaps);
    } else {
      myKeyboard.capsOn();
      document.querySelector('.caps').classList.add('pressed')
      this.removeEventListener('keydown', triggerCaps);
    }
  }
});

window.addEventListener('keyup', (e) => {
  myKeyboard.lowLightKeys(e);
  if (e.code === 'ShiftLeft') {
    myKeyboard.shiftOff();
  }
  if (e.code === 'ShiftRight') {
    myKeyboard.shiftOff();
  }
  if (e.key === 'CapsLock') {
    window.addEventListener('keydown', function triggerCaps(e) {
      if (e.key === 'CapsLock') {
        if (myKeyboard.isCapsOn) {
          myKeyboard.capsOff();
          document.querySelector('.caps').classList.remove('pressed');
          this.removeEventListener('keydown', triggerCaps);
        } else {
          myKeyboard.capsOn();
          document.querySelector('.caps').classList.add('pressed');
          this.removeEventListener('keydown', triggerCaps);
        }
      }
    });
  }
});

window.addEventListener('click', () => {
  textarea.focus();
});

window.addEventListener('beforeunload', setLocalStorage);
