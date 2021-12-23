import Popup from './Popup.js';
import { getElement } from '../utils/utils.js';
import { photoComponentSelectors } from '../utils/constants.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _getComposition() {
    return {
      image: getElement(photoComponentSelectors.image, this._element),
      caption: getElement(photoComponentSelectors.caption, this._element),
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
