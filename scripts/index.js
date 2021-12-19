import Card from './Card.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';

const formValidatorConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__handler',
  inactiveButtonClass: 'form__handler_disabled',
  inputErrorClass: 'form__input_type_error',
  activeErrorClass: 'form__input-error_active',
  errorSelectorPostfix: 'input-error',
};
const cards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

const profilePopup = new PopupWithForm('.profile-popup', handleProfileFormSubmit, formValidatorConfig);
const cardPopup = new PopupWithForm('.card-popup', handleCardFormSubmit, formValidatorConfig);
const photoPopup = new PopupWithImage('.photo-popup');
const userInfo = new UserInfo('.profile__title', '.profile__subtitle');
const section = new Section({ items: cards, renderer: createCard }, '.cards');

function openProfilePopup() {
  const data = {
    '.user-name-input': userInfo.getUserInfo().name,
    '.user-profession-input': userInfo.getUserInfo().profession,
  };
  profilePopup.setInputValues(data);
  profilePopup.open();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const inputValues = profilePopup.getInputValues();
  const data = {
    name: inputValues[profilePopup.getInputElement('.user-name-input').name],
    profession: inputValues[profilePopup.getInputElement('.user-profession-input').name],
  };
  userInfo.setUserInfo(data);
  profilePopup.close();
}

function openPhotoPopup(link, name) {
  photoPopup.open(link, name);
}

function openCardPopup() {
  cardPopup.open();
}

function createCard(card, templateSelector = '.card-template', handleCardClick = openPhotoPopup) {
  return new Card(card, templateSelector, handleCardClick).create();
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: document.querySelector('.card-name-input').value,
    link: document.querySelector('.card-link-input').value,
  };
  section.addItem(createCard(card));
  cardPopup.close();
}

function setEventListeners() {
  document.querySelector('.profile__btn_action_edit').addEventListener('click', openProfilePopup);
  document.querySelector('.profile__btn_action_add').addEventListener('click', openCardPopup);
}

section.render();
setEventListeners();
