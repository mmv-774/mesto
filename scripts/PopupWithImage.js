import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _getComposition() {
    return {
      image: this._element.querySelector('.photo__img'),
      caption: this._element.querySelector('.photo__caption'),
    };
  }

  open(image, caption) {
    this._composition.image.src = image;
    this._composition.image.alt = caption;
    this._composition.caption.textContent = caption;
    super.open();
  }
}

export default PopupWithImage;
