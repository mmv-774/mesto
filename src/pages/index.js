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
  avatarFormInputSelectors,
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';

const api = new Api(apiOptions);
const profilePopup = new PopupWithForm(popupElementSelectors.profile, handleProfileFormSubmit, createFormValidator);
const cardPopup = new PopupWithForm(popupElementSelectors.card, handleCardFormSubmit, createFormValidator);
const photoPopup = new PopupWithImage(popupElementSelectors.photo);
const confirmPopup = new PopupWithConfirm(popupElementSelectors.confirm);
const avatarPopup = new PopupWithForm(popupElementSelectors.avatar, handleAvatarFormSubmit, createFormValidator);
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

function openAvatarPopup() {
  avatarPopup.open();
}

function createCard(
  card,
  templateSelector = cardTemplateSelector,
  handleCardClick = openPhotoPopup,
  handleDeleteCardClick = handleDeleteCard,
  handleLikeCardClick = handleLikeCard
) {
  const userId = userInfo.getUserInfo().id;
  const handles = {
    handleCardClick,
    handleDeleteCardClick,
    handleLikeCardClick,
  };
  return new Card(card, userId, templateSelector, handles).create();
}

function handleDeleteCard(cardId) {
  confirmPopup.setAceptConfirmAction(() => deleteCard(cardId));
  confirmPopup.open();
}

function handleLikeCard(card) {
  setLike(card);
}

function handleCardFormSubmit(inputValues) {
  const card = {
    name: inputValues[getElement(cardFormInputSelectors.name).name],
    link: inputValues[getElement(cardFormInputSelectors.link).name],
  };
  postNewCard(card);
}

function handleAvatarFormSubmit(inputValues) {
  const avatar = inputValues[getElement(avatarFormInputSelectors.link).name];
  patchAvatar(avatar);
}

function createFormValidator(config, formElement) {
  return new FormValidator(config, formElement);
}

function setEventListeners() {
  getElement(profileComponentSelectors.editButton).addEventListener('click', openProfilePopup);
  getElement(profileComponentSelectors.addButton).addEventListener('click', openCardPopup);
  getElement(profileComponentSelectors.avatarEditButton).addEventListener('click', openAvatarPopup);
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
  profilePopup.enableLoadingMode();
  api
    .patchUserInfo(user)
    .then((res) => {
      userInfo.setUserInfo(res);
      profilePopup.close();
    })
    .catch((error) => console.log(error))
    .finally(() => profilePopup.disableLoadingMode());
}

function postNewCard(card) {
  cardPopup.enableLoadingMode();
  api
    .postNewCard(card)
    .then((res) => {
      section.addItem(createCard(res));
      cardPopup.close();
    })
    .catch((error) => console.log(error))
    .finally(() => cardPopup.disableLoadingMode());
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

function patchAvatar(avatar) {
  avatarPopup.enableLoadingMode();
  api
    .patchAvatar(avatar)
    .then((res) => {
      userInfo.setAvatar(res.avatar);
      getElement(profileComponentSelectors.avatar).src = res.avatar;
      avatarPopup.close();
    })
    .catch((error) => console.log(error))
    .finally(() => avatarPopup.disableLoadingMode());
}

function setLike(card) {
  api
    .setLike(card.id, card.isLiked())
    .then((res) => {
      card.renderLikeState(res);
    })
    .catch((error) => console.log(error));
}

getUserPage();
setEventListeners();
