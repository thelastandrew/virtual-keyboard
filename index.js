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
