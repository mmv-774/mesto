class Popup {
  constructor(popupSelector) {
    this._close = this._close.bind(this);
    this._closeByEsc = this._closeByEsc.bind(this);
    this._element = document.querySelector(popupSelector);
    this._setEventListeners();
  }

  _close(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
    if (evt.target.classList.contains('popup__close')) {
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
    this._element.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeByEsc);
  }

  close() {
    this._element.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closeByEsc);
  }
}

export default Popup;
