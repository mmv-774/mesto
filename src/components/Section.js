import { getElement } from '../utils/utils.js';

class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = getElement(containerSelector);
  }

  _clear() {
    this._container.innerHTML = '';
  }

  addItem(element) {
    this._container.prepend(element);
  }

  render(items) {
    this._clear();
    items.forEach((item) => this._container.append(this._renderer(item)));
  }
}

export default Section;
