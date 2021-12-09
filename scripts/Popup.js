class Popup {
  constructor(popupSelector) {
    this._close = this.close.bind(this);
    this._closeByEscape = this._closeByEscape.bind(this);
    this._closeByOverlayClick = this._closeByOverlayClick.bind(this);
    this._element = this._getPopup(popupSelector);
  }

  _getPopup(popupSelector) {
    return document.querySelector(popupSelector);
  }

  _setEventListeners() {
    this._element.addEventListener('click', this._closeByOverlayClick);
    this._element.querySelector('.popup__btn').addEventListener('click', this._close);
    document.addEventListener('keydown', this._closeByEscape);
  }

  _removeEventListeners() {
    this._element.removeEventListener('click', this._closeByOverlayClick);
    this._element.querySelector('.popup__btn').removeEventListener('click', this._close);
    document.removeEventListener('keydown', this._closeByEscape);
  }

  _closeByKeydown(evt, key) {
    if (evt.key === key) {
      this.close();
    }
  }

  _closeByEscape(evt) {
    this._closeByKeydown(evt, 'Escape');
  }

  _closeByOverlayClick(evt) {
    if (evt.target.classList.contains('popup')) {
      this.close();
    }
  }

  open() {
    this._element.classList.add('popup_opened');
    this._setEventListeners();
  }

  close() {
    this._element.classList.remove('popup_opened');
    this._removeEventListeners();
  }
}

export default Popup;
