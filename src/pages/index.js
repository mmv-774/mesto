import './index.css';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { getElement } from '../utils/utils.js';
import {
  apiOptions,
  popupElementSelectors,
  profileComponentSelectors,
  cardsContainerSelector,
  profileFormInputSelectors,
  cardTemplateSelector,
  cardFormInputSelectors,
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';

const api = new Api(apiOptions);
const profilePopup = new PopupWithForm(popupElementSelectors.profile, handleProfileFormSubmit, createFormValidator);
const cardPopup = new PopupWithForm(popupElementSelectors.card, handleCardFormSubmit, createFormValidator);
const photoPopup = new PopupWithImage(popupElementSelectors.photo);
const confirmPopup = new PopupWithConfirm(popupElementSelectors.confirm);
const userInfo = new UserInfo(
  profileComponentSelectors.name,
  profileComponentSelectors.about,
  profileComponentSelectors.avatar
);
const section = new Section(createCard, cardsContainerSelector);

function openProfilePopup() {
  const user = userInfo.getUserInfo();
  const inputValues = {
    [profileFormInputSelectors.name]: user.name,
    [profileFormInputSelectors.about]: user.about,
  };
  profilePopup.open(inputValues);
}

function handleProfileFormSubmit(inputValues) {
  const user = {
    name: inputValues[getElement(profileFormInputSelectors.name).name],
    about: inputValues[getElement(profileFormInputSelectors.about).name],
  };
  patchUserInfo(user);
}

function openPhotoPopup(link, name) {
  photoPopup.open(link, name);
}

function openCardPopup() {
  cardPopup.open();
}

function createCard(
  card,
  templateSelector = cardTemplateSelector,
  handleCardClick = openPhotoPopup,
  handleDeleteCardClick = handleDeleteCard
) {
  const userId = userInfo.getUserInfo().id;
  const handles = {
    handleCardClick,
    handleDeleteCardClick,
  };
  return new Card(card, userId, templateSelector, handles).create();
}

function handleDeleteCard(cardId) {
  confirmPopup.setAceptConfirmAction(() => deleteCard(cardId));
  confirmPopup.open();
}

function handleCardFormSubmit(inputValues) {
  const card = {
    name: inputValues[getElement(cardFormInputSelectors.name).name],
    link: inputValues[getElement(cardFormInputSelectors.link).name],
  };
  postNewCard(card);
}

function createFormValidator(config, formElement) {
  return new FormValidator(config, formElement);
}

function setEventListeners() {
  getElement(profileComponentSelectors.editButton).addEventListener('click', openProfilePopup);
  getElement(profileComponentSelectors.addButton).addEventListener('click', openCardPopup);
}

function getUserPage() {
  api
    .getUserPage()
    .then((res) => {
      const [user, cards] = res;
      userInfo.setUserInfo(user);
      section.render(cards);
    })
    .catch((error) => console.log(error));
}

function patchUserInfo(user) {
  api
    .patchUserInfo(user)
    .then((res) => {
      userInfo.setUserInfo(res);
      profilePopup.close();
    })
    .catch((error) => console.log(error));
}

function postNewCard(card) {
  api
    .postNewCard(card)
    .then((res) => {
      section.addItem(createCard(res));
      cardPopup.close();
    })
    .catch((error) => console.log(error));
}

function deleteCard(cardId) {
  api
    .deleteCard(cardId)
    .then(() => {
      document.getElementById(`${cardId}`).remove();
      confirmPopup.close();
    })
    .catch((error) => console.log(error));
}

getUserPage();
setEventListeners();
