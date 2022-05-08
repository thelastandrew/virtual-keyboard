class Textarea {
  constructor(options) {
    this.textarea = options.textarea;
    this.width = options.width;
    this.height = options.height;
    this.id = options.id;
    this.value = options.value;
  }

  init() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('textarea');
    this.textarea.setAttribute('id', this.id);
    this.textarea.setAttribute('cols', this.width);
    this.textarea.setAttribute('rows', this.height);
    return this.textarea;
  }
}

const myTextarea = new Textarea({
  textarea: null,
  width: 100,
  height: 20,
  id: 'textarea',
  value: '',
});

export default myTextarea;
