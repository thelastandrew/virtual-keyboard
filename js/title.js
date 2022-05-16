class Title {
  constructor(options) {
    this.inner = options.inner;
  }

  init() {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = this.inner;
    return title;
  }
}

const myTitle = new Title({
  inner: 'Virtual keyboard',
});

export default myTitle;
