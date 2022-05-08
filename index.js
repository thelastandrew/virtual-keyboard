const main = document.createElement('main');
main.classList.add('main');
document.body.append(main);

const title = document.createElement('h1');
title.classList.add('title');
title.innerText = 'Virtual keyboard';
main.append(title);

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.id = 'textarea';
textarea.setAttribute('cols', '100');
textarea.setAttribute('rows', '20');
main.append(textarea);

const keyboard = {
  elements: {
    keyboardBody: null,
    keyboardRow: null,
  },

  properties: {
    lang: null, // 'en' or 'ru'
    isCaps: null, // boolean
  },

  init() {
    this.elements.keyboardBody = document.createElement('div');
    this.elements.keyboardBody.classList.add('keyboard-body');

    for (let i = 0; i < 5; i++) {
      this.elements.keyboardRow = document.createElement('div');
      this.elements.keyboardRow.classList.add('keyboard-row');
      this.elements.keyboardBody.append(this.elements.keyboardRow);
    }
    main.append(this.elements.keyboardBody);
    this.createKeys();
  },

  createKeys() {
    //prettier-ignore
    const keysEn = [
      ['`','1','2','3','4','5','6','7','8','9','0','-','=','backspace'],
      ['tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','del'],
      ['caps','a','s','d','f','g','h','j','k','l',';','\'','enter'],
      ['shift-l','z','x','c','v','b','n','m',',','.','/','up','shift-r'],
      ['ctrl-l','alt-l','space','alt-r','left','down','right','ctrl-r'],
    ];

    //prettier-ignore
    const keysEnCaps = [
      ['`','1','2','3','4','5','6','7','8','9','0','-','=','backspace'],
      ['tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\','del'],
      ['caps','A','S','D','F','G','H','J','K','L',';','\'','enter'],
      ['shift-l','Z','X','C','V','B','N','M',',','.','/','up','shift-r'],
      ['ctrl-l','alt-l','space','alt-r','left','down','right','ctrl-r'],
    ];

    //prettier-ignore
    const keysEnShifted = [
      ['~','!','@','#','$','%','^','&','*','(',')','_','+','backspace'],
      ['tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|','del'],
      ['caps','A','S','D','F','G','H','J','K','L',':','"','enter'],
      ['shift-l','Z','X','C','V','B','N','M','<','>','?','up','shift-r'],
      ['ctrl-l','alt-l','space','alt-r','left','down','right','ctrl-r'],
    ];

    //prettier-ignore
    const keysRu = [
      ['ё','1','2','3','4','5','6','7','8','9','0','-','=','backspace'],
      ['tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','del'],
      ['caps','ф','ы','в','а','п','р','о','л','д','ж','э','enter'],
      ['shift-l','я','ч','с','м','и','т','ь','б','ю','.','up','shift-r'],
      ['ctrl-l','alt-l','space','alt-r','left','down','right','ctrl-r'],
    ];

    //prettier-ignore
    const keysRuCaps = [
      ['Ё','1','2','3','4','5','6','7','8','9','0','-','=','backspace'],
      ['tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\\','del'],
      ['caps','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','enter'],
      ['shift-l','Я','Ч','С','М','И','Т','Ь','Б','Ю','.','up','shift-r'],
      ['ctrl-l','alt-l','space','alt-r','left','down','right','ctrl-r'],
    ];

    //prettier-ignore
    const keysRuShifted = [
      ['Ё','!','"','№',';','%',':','?','*','(',')','_','+','backspace'],
      ['tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','/','del'],
      ['caps','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','enter'],
      ['shift-l','Я','Ч','С','М', 'И','Т','Ь','Б','Ю',',','up','shift-r'],
      ['ctrl-l','alt-l','space','alt-r','left','down','right','ctrl-r'],
    ];

    const keyboardRows = document.querySelectorAll('.keyboard-row');

    keysEn.forEach((row, index) => {
      row.forEach((key, keyIndex) => {
        const keyElement = document.createElement('button');
        keyElement.classList.add('keyboard-key');
        switch (key) {
          case 'backspace':
            keyElement.classList.add('icon-backspace', 'wide');
            keyElement.setAttribute('data-code', 'Backspace');
            break;
          case 'tab':
            keyElement.classList.add('icon-tab', 'med-wide');
            keyElement.setAttribute('data-code', 'Tab');
            break;
          case 'del':
            keyElement.setAttribute('data-code', 'Delete');
            keyElement.innerHTML = 'Del';
            break;
          case 'caps':
            keyElement.classList.add('icon-caps', 'med-wide', 'caps');
            keyElement.setAttribute('data-code', 'CapsLock');
            break;
          case 'enter':
            keyElement.classList.add('icon-return', 'wide');
            keyElement.setAttribute('data-code', 'Enter');
            break;
          case 'shift-l':
            keyElement.classList.add('wide');
            keyElement.setAttribute('data-code', 'ShiftLeft');
            keyElement.innerHTML = 'Shift';
            break;
          case 'shift-r':
            keyElement.classList.add('wide');
            keyElement.setAttribute('data-code', 'ShiftRight');
            keyElement.innerHTML = 'Shift';
            break;
          case 'ctrl-l':
            keyElement.classList.add('med-wide');
            keyElement.setAttribute('data-code', 'ControlLeft');
            keyElement.innerHTML = 'Ctrl';
            break;
          case 'ctrl-r':
            keyElement.classList.add('med-wide');
            keyElement.setAttribute('data-code', 'ControlRight');
            keyElement.innerHTML = 'Ctrl';
            break;
          case 'alt-l':
            keyElement.classList.add('med-wide');
            keyElement.setAttribute('data-code', 'AltLeft');
            keyElement.innerHTML = 'Alt';
            break;
          case 'alt-r':
            keyElement.classList.add('med-wide');
            keyElement.setAttribute('data-code', 'AltRight');
            keyElement.innerHTML = 'Alt';
            break;
          case 'space':
            keyElement.classList.add('icon-space', 'space');
            keyElement.setAttribute('data-code', 'Space');
            break;
          case 'up':
            keyElement.classList.add('icon-up');
            keyElement.setAttribute('data-code', 'ArrowUp');
            break;
          case 'left':
            keyElement.classList.add('icon-left');
            keyElement.setAttribute('data-code', 'ArrowLeft');
            break;
          case 'down':
            keyElement.classList.add('icon-down');
            keyElement.setAttribute('data-code', 'ArrowDown');
            break;
          case 'right':
            keyElement.classList.add('icon-right');
            keyElement.setAttribute('data-code', 'ArrowRight');
            break;
          default:
            keyElement.innerHTML = `<span class="ru hidden">
            <span class="lowCase hidden">${keysRu[index][keyIndex]}</span>
            <span class="upCase hidden">${keysRuCaps[index][keyIndex]}</span>
            <span class="shifted hidden">${keysRuShifted[index][keyIndex]}</span>
          </span>
          <span class="en">
            <span class="lowCase">${keysEn[index][keyIndex]}</span>
            <span class="upCase hidden">${keysEnCaps[index][keyIndex]}</span>
            <span class="shifted hidden">${keysEnShifted[index][keyIndex]}</span>
          </span>`;
            if (key.charCodeAt(0) >= 97 && key.charCodeAt(0) <= 122) {
              keyElement.setAttribute(
                'data-code',
                `Key${key.toLocaleUpperCase()}`
              );
            } else if (Number(key) >= 0 && Number(key) <= 9) {
              keyElement.setAttribute('data-code', `Digit${key}`);
            } else if (key === '`') {
              keyElement.setAttribute('data-code', 'Backquote');
            } else if (key === '-') {
              keyElement.setAttribute('data-code', 'Minus');
            } else if (key === '=') {
              keyElement.setAttribute('data-code', 'Equal');
            } else if (key === '[') {
              keyElement.setAttribute('data-code', 'BracketLeft');
            } else if (key === ']') {
              keyElement.setAttribute('data-code', 'BracketRight');
            } else if (key === '\\') {
              keyElement.setAttribute('data-code', 'Backslash');
            } else if (key === ';') {
              keyElement.setAttribute('data-code', 'Semicolon');
            } else if (key === "'") {
              keyElement.setAttribute('data-code', 'Quote');
            } else if (key === ',') {
              keyElement.setAttribute('data-code', 'Comma');
            } else if (key === '.') {
              keyElement.setAttribute('data-code', 'Period');
            } else if (key === '/') {
              keyElement.setAttribute('data-code', 'Slash');
            }
        }
        keyboardRows[index].append(keyElement);
      });
    });
  },
};

window.addEventListener('DOMContentLoaded', function () {
  keyboard.init();
});

window.addEventListener('keydown', (e) => {
  console.log(e);
});
