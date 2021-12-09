import Popup from './Popup.js';

class PhotoPopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photo = this._getPhotoComposition();
  }

  _getPhotoComposition() {
    return {
      image: this._element.querySelector('.photo__img'),
      caption: this._element.querySelector('.photo__caption'),
    };
  }

  open(image, caption) {
    this._photo.image.src = image;
    this._photo.image.alt = caption;
    this._photo.caption.textContent = caption;
    super.open();
  }
}

export default PhotoPopup;
