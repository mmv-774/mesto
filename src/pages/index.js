import './index.css';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { getElement } from '../utils/utils.js';
import {
  popupElementSelectors,
  profileComponentSelectors,
  cards,
  cardsContainerSelector,
  profileFormInputSelectors,
  cardTemplateSelector,
  cardFormInputSelectors,
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';

const profilePopup = new PopupWithForm(popupElementSelectors.profile, handleProfileFormSubmit, createFormValidator);
const cardPopup = new PopupWithForm(popupElementSelectors.card, handleCardFormSubmit, createFormValidator);
const photoPopup = new PopupWithImage(popupElementSelectors.photo);
const userInfo = new UserInfo(profileComponentSelectors.title, profileComponentSelectors.subtitle);
const section = new Section({ items: cards, renderer: createCard }, cardsContainerSelector);

function openProfilePopup() {
  const inputValues = {
    [profileFormInputSelectors.name]: userInfo.getUserInfo().name,
    [profileFormInputSelectors.profession]: userInfo.getUserInfo().profession,
  };
  profilePopup.open(inputValues);
}

function handleProfileFormSubmit(inputValues) {
  const data = {
    name: inputValues[getElement(profileFormInputSelectors.name).name],
    profession: inputValues[getElement(profileFormInputSelectors.profession).name],
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

function createCard(card, templateSelector = cardTemplateSelector, handleCardClick = openPhotoPopup) {
  return new Card(card, templateSelector, handleCardClick).create();
}

function handleCardFormSubmit(inputValues) {
  const card = {
    name: inputValues[getElement(cardFormInputSelectors.name).name],
    link: inputValues[getElement(cardFormInputSelectors.link).name],
  };
  section.addItem(createCard(card));
  cardPopup.close();
}

function createFormValidator(config, formElement) {
  return new FormValidator(config, formElement);
}

function setEventListeners() {
  getElement(profileComponentSelectors.editButton).addEventListener('click', openProfilePopup);
  getElement(profileComponentSelectors.addButton).addEventListener('click', openCardPopup);
}

section.render();
setEventListeners();
