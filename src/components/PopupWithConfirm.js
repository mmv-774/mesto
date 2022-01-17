import Popup from './Popup.js';
import { getElement } from '../utils/utils.js';
import { formComponentSelectors } from '../utils/constants.js';

class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _getComposition() {
    return {
      form: getElement(formComponentSelectors.form, this._element),
    };
  }

  _setEventListeners() {
    this._composition.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    super._setEventListeners();
  }
}

export default PopupWithConfirm;
