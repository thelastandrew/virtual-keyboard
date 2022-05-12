class Keyboard {
  constructor(props) {
    this.keyboardBody = props.keyboardBody;
    this.keyboardRow = props.keyboardRow;
    this.keyboardRows = props.keyboardRows;
    this.keys = props.keys;
    this.lang = props.lang;
    this.isCapsOn = props.isCapsOn;
    this.isShifted = props.isShifted;
    this.mod = props.mod;
  }

  init() {
    this.keyboardBody = document.createElement('div');
    this.keyboardBody.classList.add('keyboard-body');

    for (let i = 0; i < 5; i += 1) {
      this.keyboardRow = document.createElement('div');
      this.keyboardRow.classList.add('keyboard-row');
      this.keyboardBody.append(this.keyboardRow);
      this.keyboardRows.push(this.keyboardRow);
    }
    this.createKeys();
    return this.keyboardBody;
  }

  createKeys() {
    // prettier-ignore
    const keysEn = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
      ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'],
      ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter'],
      ['shift-l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'shift-r'],
      ['ctrl-l', 'alt-l', 'space', 'alt-r', 'left', 'down', 'right', 'ctrl-r'],
    ];

    // prettier-ignore
    const keysEnCaps = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
      ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'del'],
      ['caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'enter'],
      ['shift-l', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'up', 'shift-r'],
      ['ctrl-l', 'alt-l', 'space', 'alt-r', 'left', 'down', 'right', 'ctrl-r'],
    ];

    // prettier-ignore
    const keysEnShifted = [
      ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
      ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'del'],
      ['caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter'],
      ['shift-l', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'up', 'shift-r'],
      ['ctrl-l', 'alt-l', 'space', 'alt-r', 'left', 'down', 'right', 'ctrl-r'],
    ];

    // prettier-ignore
    const keysRu = [
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
      ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'],
      ['caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter'],
      ['shift-l', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'up', 'shift-r'],
      ['ctrl-l', 'alt-l', 'space', 'alt-r', 'left', 'down', 'right', 'ctrl-r'],
    ];

    // prettier-ignore
    const keysRuCaps = [
      ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
      ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'del'],
      ['caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter'],
      ['shift-l', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'up', 'shift-r'],
      ['ctrl-l', 'alt-l', 'space', 'alt-r', 'left', 'down', 'right', 'ctrl-r'],
    ];

    // prettier-ignore
    const keysRuShifted = [
      ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace'],
      ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'del'],
      ['caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter'],
      ['shift-l', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'up', 'shift-r'],
      ['ctrl-l', 'alt-l', 'space', 'alt-r', 'left', 'down', 'right', 'ctrl-r'],
    ];

    keysEn.forEach((row, index) => {
      row.forEach((key, keyIndex) => {
        const keyElement = document.createElement('button');
        keyElement.classList.add('keyboard-key');
        switch (key) {
          case 'backspace':
            keyElement.classList.add('icon-backspace', 'wide', 'bcksp');
            keyElement.setAttribute('data-code', 'Backspace');
            break;
          case 'tab':
            keyElement.classList.add('icon-tab', 'med-wide', 'tab');
            keyElement.setAttribute('data-code', 'Tab');
            break;
          case 'del':
            keyElement.setAttribute('data-code', 'Delete');
            keyElement.innerHTML = 'Del';
            break;
          case 'caps':
            keyElement.classList.add('icon-caps', 'med-wide', 'caps');
            keyElement.setAttribute('data-code', 'CapsLock');
            keyElement.addEventListener('click', () => {
              this.triggerCaps(keyElement);
            });
            break;
          case 'enter':
            keyElement.classList.add('icon-return', 'wide', 'enter');
            keyElement.setAttribute('data-code', 'Enter');
            break;
          case 'shift-l':
            keyElement.classList.add('wide', 'shift-l');
            keyElement.setAttribute('data-code', 'ShiftLeft');
            keyElement.innerHTML = 'Shift';
            keyElement.addEventListener('mousedown', () => {
              this.triggerShift();
            });
            keyElement.addEventListener('mouseup', () => {
              this.triggerShift();
            });
            break;
          case 'shift-r':
            keyElement.classList.add('wide', 'shift-r');
            keyElement.setAttribute('data-code', 'ShiftRight');
            keyElement.innerHTML = 'Shift';
            keyElement.addEventListener('mousedown', () => {
              this.triggerShift();
            });
            keyElement.addEventListener('mouseup', () => {
              this.triggerShift();
            });
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
            keyElement.classList.add('mod');
            keyElement.innerHTML = `<span class="ru hidden">
            <span class="reg">${keysRu[index][keyIndex]}</span>
            <span class="isCapsOn hidden">${keysRuCaps[index][keyIndex]}</span>
            <span class="isShifted hidden">${keysRuShifted[index][keyIndex]}</span>
          </span>
          <span class="en">
            <span class="reg">${keysEn[index][keyIndex]}</span>
            <span class="isCapsOn hidden">${keysEnCaps[index][keyIndex]}</span>
            <span class="isShifted hidden">${keysEnShifted[index][keyIndex]}</span>
          </span>`;
            if (key.charCodeAt(0) >= 97 && key.charCodeAt(0) <= 122) {
              keyElement.setAttribute(
                'data-code',
                `Key${key.toLocaleUpperCase()}`,
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
            this.mod.push(keyElement);
        }
        this.keys.push(keyElement);
        this.keyboardRows[index].append(keyElement);
      });
    });
  }

  keyInput(input) {
    this.mod.forEach((element) => {
      element.addEventListener('click', () => {
        input.value += element.innerText;
      });
    });
    document.querySelector('.bcksp').addEventListener('click', () => {
      const curValue = input.value.split('');
      curValue.pop();
      input.value = curValue.join('');
    });
    document.querySelector('.tab').addEventListener('click', () => {
      input.value += '    ';
    });
    document.querySelector('.enter').addEventListener('click', () => {
      input.value += '\n';
    });
    document.querySelector('.space').addEventListener('click', () => {
      input.value += ' ';
    });
  }

  highLightKeys(event) {
    this.keys.forEach((element) => {
      if (element.dataset.code === event.code) {
        element.classList.add('active');
      }
    });
  }

  lowLightKeys(event) {
    this.keys.forEach((element) => {
      if (element.dataset.code === event.code) {
        element.classList.remove('active');
      }
    });
  }

  capsOn() {
    this.isCapsOn = !this.isCapsOn;
    this.mod.forEach((element) => {
      for (let i = 0; i < 2; i += 1) {
        element.children[i].children[0].classList.add('hidden');
        element.children[i].children[1].classList.remove('hidden');
    }
    })
  }

  capsOff() {
    this.isCapsOn = !this.isCapsOn;
    this.mod.forEach((element) => {
      for (let i = 0; i < 2; i += 1) {
        element.children[i].children[0].classList.remove('hidden');
        element.children[i].children[1].classList.add('hidden');
    }
    })
  }

  shiftOn() {
    this.isShifted = !this.isShifted;
    this.mod.forEach((element) => {
      for (let i = 0; i < 2; i += 1) {
        element.children[i].children[2].classList.remove('hidden');
        if (!this.isCapsOn) {
          element.children[i].children[0].classList.add('hidden'); 
        } else {
          element.children[i].children[1].classList.add('hidden');
          /* eslint no-param-reassign: ["error", { "props": false }] */
          let elInnerHTML = element.children[i].children[2].innerHTML;
            element.children[i].children[2].innerHTML = elInnerHTML.toLowerCase();
            elInnerHTML = elInnerHTML.toLowerCase();
        }
      }
    })
  }

  shiftOff() {
    this.isShifted = !this.isShifted;
    this.mod.forEach((element) => {
      for (let i = 0; i < 2; i += 1) {
        element.children[i].children[2].classList.add('hidden');
        if (!this.isCapsOn) {
          element.children[i].children[0].classList.remove('hidden'); 
        } else {
          element.children[i].children[1].classList.remove('hidden');
          /* eslint no-param-reassign: ["error", { "props": false }] */
          let elInnerHTML = element.children[i].children[2].innerHTML;
            element.children[i].children[2].innerHTML = elInnerHTML.toUpperCase();
            elInnerHTML = elInnerHTML.toUpperCase();
        }
      }
    })
  }

  switchLang() {
    const curLang = this.lang === 'ru' ? 0 : 1;
    const opLang = this.lang === 'ru' ? 1 : 0;

    this.mod.forEach((element) => {
      element.children[`${curLang}`].classList.add('hidden');
      element.children[`${opLang}`].classList.remove('hidden');
    });

    this.lang = this.lang === 'en' ? 'ru' : 'en';
   }

  checkLang(lng) {
    if (lng !== this.lang) {
      this.switchLang();
    }
  }
}

const myKeyboard = new Keyboard({
  keyboardBody: null,
  keyboardRow: null,
  keyboardRows: [],
  keys: [],
  mod: [],
  lang: 'en',
  isCapsOn: false,
  isShifted: false,
});

export default myKeyboard;
