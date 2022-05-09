/* eslint-disable import/extensions */
import myTitle from './title.js';
import myTextarea from './textarea.js';
import myKeyboard from './keyboard.js';

const main = document.createElement('main');
main.classList.add('main');
document.body.append(main);

window.addEventListener('DOMContentLoaded', () => {
  main.append(myTitle.init());
  main.append(myTextarea.init());
  main.append(myKeyboard.init());
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
