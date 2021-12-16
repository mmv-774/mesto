import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getComposition() {
    return {
      form: this._element.querySelector('.form'),
    };
  }

  _getInputValues() {
    const inputValues = {};
    const inputElements = Array.from(this._composition.form.querySelectorAll('form__input'));
    inputElements.forEach((inputElement) => {
      inputValues[inputElement.name] = inputElement.value;
    });
    return inputValues;
  }

  _setEventListeners() {
    this._composition.form.addEventListener('submit', (evt) => handleFormSubmit(evt));
    super._setEventListeners();
  }

  close() {
    this._composition.form.reset();
    super.close();
  }
}

export default PopupWithForm;
