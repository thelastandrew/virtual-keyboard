class Textarea {
  constructor(options) {
    this.textarea = options.textarea;
    this.width = options.width;
    this.height = options.height;
    this.id = options.id;
  }

  init() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('textarea');
    this.textarea.setAttribute('autofocus', '');
    this.textarea.setAttribute('id', this.id);
    this.textarea.setAttribute('cols', this.width);
    this.textarea.setAttribute('rows', this.height);
    return this.textarea;
  }
}

const myTextarea = new Textarea({
  textarea: null,
  width: 81,
  height: 15,
  id: 'textarea',
});

export default myTextarea;
