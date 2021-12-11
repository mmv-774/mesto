import Card from './Card.js';
import FormValidator from './FormValidator.js';

//#region declaration
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');
const profileEditBtn = document.querySelector('.profile__btn_action_edit');
const profilePopup = document.querySelector('.profile-popup');
const profileEditForm = profilePopup.querySelector('.form');
const profileNewName = profileEditForm.querySelector('.user-name-input');
const profileNewProfession = profileEditForm.querySelector('.user-profession-input');
const cardAddBtn = document.querySelector('.profile__btn_action_add');
const cardPopup = document.querySelector('.card-popup');
const cardAddForm = cardPopup.querySelector('.form');
const cardNewName = cardAddForm.querySelector('.card-name-input');
const cardNewLink = cardAddForm.querySelector('.card-link-input');
const cardsElement = document.querySelector('.cards');
const photoPopup = document.querySelector('.photo-popup');
const photoPopupImg = photoPopup.querySelector('.photo__img');
const photoPopupCaption = photoPopup.querySelector('.photo__caption');
const formValidators = {};
const validatorConfig = {
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
//#endregion

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};

const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

const openProfilePopup = () => {
  profileNewName.value = profileName.textContent;
  profileNewProfession.value = profileProfession.textContent;
  formValidators[profileEditForm.name].resetValidation();
  openPopup(profilePopup);
};

const saveProfileInfo = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNewName.value;
  profileProfession.textContent = profileNewProfession.value;
  closePopup(profilePopup);
};

function openPhotoPopup(name, link) {
  photoPopupImg.src = link;
  photoPopupImg.alt = name;
  photoPopupCaption.textContent = name;
  openPopup(photoPopup);
}

function openCardPopup() {
  formValidators[cardAddForm.name].resetValidation();
  openPopup(cardPopup);
}

function createCard(card, templateSelector = '.card-template', handleCardClick = openPhotoPopup) {
  return new Card(card, templateSelector, handleCardClick).create();
}

const addNewCard = (evt) => {
  evt.preventDefault();
  const card = {
    name: cardNewName.value,
    link: cardNewLink.value,
  };
  cardsElement.prepend(createCard(card));
  closePopup(cardPopup);
  cardAddForm.reset();
};

const initCards = (cards) => {
  cards.forEach((card) => cardsElement.append(createCard(card)));
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validateForm = new FormValidator(config, formElement);
    formValidators[formElement.name] = validateForm;
    validateForm.enableValidation();
  });
};

const setPopupsEventListeners = () => {
  const popups = Array.from(document.querySelectorAll('.popup'));
  popups.forEach((popup) =>
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup);
      }
    })
  );
};

profileEditBtn.addEventListener('click', openProfilePopup);
profileEditForm.addEventListener('submit', saveProfileInfo);
cardAddBtn.addEventListener('click', openCardPopup);
cardAddForm.addEventListener('submit', addNewCard);

initCards(cards);
enableValidation(validatorConfig);
setPopupsEventListeners();
