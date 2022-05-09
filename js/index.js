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
});

window.addEventListener('keyup', (e) => {
  myKeyboard.lowLightKeys(e);
});
