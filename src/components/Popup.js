import { getElement } from '../utils/utils.js';
import { popupOpenClass, popupCloseButtonClass } from '../utils/constants.js';

class Popup {
  constructor(popupSelector) {
    this._close = this._close.bind(this);
    this._closeByEsc = this._closeByEsc.bind(this);
    this._element = getElement(popupSelector);
    this._composition = this._getComposition();
    this._setEventListeners();
  }

  _getComposition() {
    return {};
  }

  _close(evt) {
    if (evt.target.classList.contains(popupOpenClass)) {
      this.close();
    }
    if (evt.target.classList.contains(popupCloseButtonClass)) {
      this.close();
    }
  }

  _closeByEsc(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _setEventListeners() {
    this._element.addEventListener('click', this._close);
  }

  open() {
    this._element.classList.add(popupOpenClass);
    document.addEventListener('keydown', this._closeByEsc);
  }

  close() {
    this._element.classList.remove(popupOpenClass);
    document.removeEventListener('keydown', this._closeByEsc);
  }

  enableLoadingMode() {
    this._composition.submit.textContent = 'Сохранение...';
    this._composition.submit.disabled = true;
  }

  disableLoadingMode() {
    this._composition.submit.textContent = this._submitButtonText;
    this._composition.submit.disabled = false;
  }
}

export default Popup;
