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

  _handleConfirmSubmit(evt) {
    evt.preventDefault();
    this._aceptConfirmAction();
  }

  _setEventListeners() {
    this._composition.form.addEventListener('submit', (evt) => this._handleConfirmSubmit(evt));
    super._setEventListeners();
  }

  setAceptConfirmAction(action) {
    this._aceptConfirmAction = action;
  }
}

export default PopupWithConfirm;
