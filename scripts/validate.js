const config = {
  formSelector: '',
  inputSelector: '',
  submitButtonSelector: '',
  inactiveButtonClass: '',
  inputErrorClass: '',
  activeErrorClass: '',
  errorSelectorPostfix: '',
};

const setConfig = (source) => Object.keys(source).forEach((key) => (config[key] = source[key]));

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-${config.errorSelectorPostfix}`
  );
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.activeErrorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-${config.errorSelectorPostfix}`
  );
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.activeErrorClass);
  errorElement.textContent = '';
};

const checkInputValid = (formElement, inputElement) =>
  inputElement.validity.valid
    ? hideInputError(formElement, inputElement)
    : showInputError(formElement, inputElement, inputElement.validationMessage);

const hasInvalidInput = (inputList) =>
  inputList.some((inputElement) => !inputElement.validity.valid);

const toggleButtonState = (inputList, buttonElement) =>
  hasInvalidInput(inputList)
    ? buttonElement.classList.add(config.inactiveButtonClass)
    : buttonElement.classList.remove(config.inactiveButtonClass);

const setFormElementsBehavior = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (validationConfig) => {
  setConfig(validationConfig);
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', () => e.preventDefault());
    setFormElementsBehavior(formElement);
  });
};

document.addEventListener('DOMContentLoaded', () =>
  enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__handler',
    inactiveButtonClass: 'form__handler_disabled',
    inputErrorClass: 'form__input_type_error',
    activeErrorClass: 'form__input-error_active',
    errorSelectorPostfix: 'input-error',
  })
);
