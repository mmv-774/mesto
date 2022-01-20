import Popup from './Popup.js';
import { getElement, getElements } from '../utils/utils.js';
import { formComponentSelectors, formValidatorConfig } from '../utils/constants.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, createFormValidator) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formValidator = createFormValidator(formValidatorConfig, this._composition.form);
    this._formValidator.enableValidation();
    this._submitButtonText = this._composition.submit.textContent;
  }

  _getComposition() {
    return {
      form: getElement(formComponentSelectors.form, this._element),
      submit: getElement(formComponentSelectors.submitHandler, this._element),
    };
  }

  _setEventListeners() {
    this._composition.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super._setEventListeners();
  }

  _getInputValues() {
    const inputValues = {};
    const inputElements = getElements(formComponentSelectors.input, this._composition.form);
    inputElements.forEach((inputElement) => {
      inputValues[inputElement.name] = inputElement.value;
    });
    return inputValues;
  }

  _setInputValues(inputValues) {
    if (!inputValues) return;
    Object.keys(inputValues).forEach((selector) => {
      getElement(selector, this._composition.form).value = inputValues[selector];
    });
  }

  open(inputValues = null) {
    this._setInputValues(inputValues);
    this._formValidator.resetValidation();
    super.open();
  }

  close() {
    this._composition.form.reset();
    super.close();
  }
}

export default PopupWithForm;
