import Card from './Card.js';

//#region elements declaration
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');
const profileEditBtn = document.querySelector('.profile__btn_action_edit');
const profilePopup = document.querySelector('.profile-popup');
const profileCloseBtn = profilePopup.querySelector('.popup__btn');
const profileEditForm = profilePopup.querySelector('.form');
const profileNewName = profileEditForm.querySelector('.user-name-input');
const profileNewProfession = profileEditForm.querySelector('.user-profession-input');
const cardAddBtn = document.querySelector('.profile__btn_action_add');
const cardPopup = document.querySelector('.card-popup');
const cardCloseBtn = cardPopup.querySelector('.popup__btn');
const cardAddForm = cardPopup.querySelector('.form');
const cardNewName = cardAddForm.querySelector('.card-name-input');
const cardNewLink = cardAddForm.querySelector('.card-link-input');
const cardsElement = document.querySelector('.cards');
const photoPopup = document.querySelector('.photo-popup');
const photoCloseBtn = photoPopup.querySelector('.photo-popup .popup__btn');
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

const closePopupByOverlayClick = (evt) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
};

const openProfilePopup = () => {
  profileNewName.value = profileName.textContent;
  profileNewProfession.value = profileProfession.textContent;
  refreshFormElementState(profileEditForm);
  openPopup(profilePopup);
};

const saveProfileInfo = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNewName.value;
  profileProfession.textContent = profileNewProfession.value;
  closePopup(profilePopup);
};

const addNewCard = (evt) => {
  evt.preventDefault();
  const card = {
    name: cardNewName.value,
    link: cardNewLink.value,
  };
  cardsElement.prepend(new Card(card, '.card-template').create());
  closePopup(cardPopup);
  cardAddForm.reset();
};

const initCards = (cards) => {
  cards.forEach((card) => cardsElement.append(new Card(card, '.card-template').create()));
};

const setPopupsEventListeners = () => {
  const popups = Array.from(document.querySelectorAll('.popup'));
  popups.forEach((popup) =>
    popup.addEventListener('click', (evt) => closePopupByOverlayClick(evt))
  );
};

profileEditBtn.addEventListener('click', openProfilePopup);
profileCloseBtn.addEventListener('click', () => closePopup(profilePopup));
profileEditForm.addEventListener('submit', saveProfileInfo);
cardAddBtn.addEventListener('click', () => openPopup(cardPopup));
cardCloseBtn.addEventListener('click', () => closePopup(cardPopup));
cardAddForm.addEventListener('submit', addNewCard);
photoCloseBtn.addEventListener('click', () => closePopup(photoPopup));

const cards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    openPopup: openPopup,
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    openPopup: openPopup,
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    openPopup: openPopup,
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    openPopup: openPopup,
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    openPopup: openPopup,
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    openPopup: openPopup,
  },
];

initCards(cards);
setPopupsEventListeners();
