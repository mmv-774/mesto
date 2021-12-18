import FormValidator from './FormValidator.js';
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

  getInputElement(inputElementSelector) {
    return this._composition.form.querySelector(inputElementSelector);
  }

  getInputValues() {
    const inputValues = {};
    const inputElements = Array.from(this._composition.form.querySelectorAll('.form__input'));
    inputElements.forEach((inputElement) => {
      inputValues[inputElement.name] = inputElement.value;
    });
    return inputValues;
  }

  setInputValues(data) {
    Object.keys(data).forEach((selector) => {
      const inputElement = this.getInputElement(selector);
      inputElement.value = data[selector];
    });
  }

  _setEventListeners() {
    this._composition.form.addEventListener('submit', (evt) => this._handleFormSubmit(evt));
    super._setEventListeners();
  }

  enableFormValidation(config) {
    this._formValidator = new FormValidator(config, this._composition.form);
    this._formValidator.enableValidation();
  }

  open() {
    if (this._formValidator) {
      this._formValidator.resetValidation();
    }
    super.open();
  }

  close() {
    this._composition.form.reset();
    super.close();
  }
}

export default PopupWithForm;
