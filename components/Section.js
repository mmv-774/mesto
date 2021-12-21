import { getElement } from '../utils/utils.js';

class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = getElement(containerSelector);
  }

  _clear() {
    this._container.innerHTML = '';
  }

  addItem(element) {
    this._container.prepend(element);
  }

  render() {
    this._clear();
    this._items.forEach((item) => this._container.append(this._renderer(item)));
  }
}

export default Section;
