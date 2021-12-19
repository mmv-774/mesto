class Section {
  constructor(data, containerSelector) {
    this._data = data;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  render() {
    this._container.innerHTML = '';
    this._data.items.forEach((item) => this._container.append(this._data.renderer(item)));
  }
}

export default Section;
