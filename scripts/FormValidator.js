class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._formElementComposition = this._getFormComposition();
  }

  _getFormComposition() {
    return {
      inputElements: Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),
      submitButton: this._formElement.querySelector(this._config.submitButtonSelector),
    };
  }

  _hasInvalidInput() {
    return this._formElementComposition.inputElements.some(
      (inputElement) => !inputElement.validity.valid
    );
  }

  _toggleButtonState() {
    this._formElementComposition.submitButton.disabled = this._hasInvalidInput();
    this._formElementComposition.submitButton.disabled
      ? this._formElementComposition.submitButton.classList.add(this._config.inactiveButtonClass)
      : this._formElementComposition.submitButton.classList.remove(
          this._config.inactiveButtonClass
        );
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-${this._config.errorSelectorPostfix}`
    );
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.activeErrorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-${this._config.errorSelectorPostfix}`
    );
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.activeErrorClass);
    errorElement.textContent = '';
  }

  _checkInputValid(inputElement) {
    inputElement.validity.valid
      ? this._hideInputError(inputElement)
      : this._showInputError(inputElement, inputElement.validationMessage);
  }

  _refreshFormElementState() {
    this._formElementComposition.inputElements.forEach((inputElement) =>
      inputElement.dispatchEvent(new Event('input'))
    );
    this._formElementComposition.inputElements.forEach((inputElement) => {
      if (inputElement.value === '') {
        this._hideInputError(inputElement);
      }
    });
  }

  _setFormElementState() {
    this._toggleButtonState();
    this._formElementComposition.inputElements.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValid(inputElement);
        this._toggleButtonState();
      });
    });

    document
      .querySelector(this._config.formOpenButton)
      .addEventListener('click', () => this._refreshFormElementState());
  }

  enableValidation() {
    this._setFormElementState();
  }
}

export default FormValidator;
