//#region elements declaration
const profileName = document.querySelector('.profile .profile__title');
const profileProfession = document.querySelector('.profile .profile__subtitle');
const profileEditBtn = document.querySelector('.profile .profile__btn.profile__btn_action_edit');
const profilePopup = document.querySelector('#profile-popup');
const profileCloseBtn = profilePopup.querySelector('.popup__btn');
const profileEditForm = profilePopup.querySelector('.form');
const profileNewName = profileEditForm.querySelector('#user-name');
const profileNewProfession = profileEditForm.querySelector('#user-profession');
const cardTemplate = document.querySelector('#card').content;
const cardAddBtn = document.querySelector('.profile .profile__btn.profile__btn_action_add');
const cardPopup = document.querySelector('#card-popup');
const cardCloseBtn = cardPopup.querySelector('.popup__btn');
const cardAddForm = cardPopup.querySelector('.form');
const cardNewName = cardAddForm.querySelector('#card-name');
const cardNewLink = cardAddForm.querySelector('#card-link');
const cardElement = cardTemplate.querySelector('.card');
const cardsElement = document.querySelector('.cards');
const photoPopup = document.querySelector('#photo-popup');
const photoPopupImg = photoPopup.querySelector('.photo__img');
const photoPopupCaption = photoPopup.querySelector('.photo__caption');
const photoCloseBtn = photoPopup.querySelector('.popup__btn');
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
  openPopup(profilePopup);
};

const saveProfileInfo = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNewName.value;
  profileProfession.textContent = profileNewProfession.value;
  closePopup(profilePopup);
};

const toggleCardLike = (evt) => evt.target.classList.toggle('card__btn_active_like');

const addNewCard = (evt) => {
  evt.preventDefault();
  cardsElement.prepend(createCard(cardNewName.value, cardNewLink.value));
  closePopup(cardPopup);
  setTimeout(
    () => cardAddForm.reset(),
    parseFloat(window.getComputedStyle(cardPopup, null).transitionDuration) * 1000
  );
};

const removeCard = (evt) => evt.target.closest('.card').remove();

const openPhotoPopup = (evt) => {
  photoPopupImg.src = evt.target.src;
  photoPopupImg.alt = evt.target.alt;
  photoPopupCaption.textContent = evt.target.alt;
  openPopup(photoPopup);
};

const createCard = (name, link) => {
  const card = cardElement.cloneNode(true);
  const photo = card.querySelector('.card__photo');
  const title = card.querySelector('.card__title');
  const likeBtn = card.querySelector('.card__btn_action_like');
  const deleteBtn = card.querySelector('.card__btn_action_delete');
  photo.src = link;
  photo.alt = name;
  title.textContent = name;
  photo.addEventListener('click', openPhotoPopup);
  likeBtn.addEventListener('click', toggleCardLike);
  deleteBtn.addEventListener('click', removeCard);
  return card;
};

const initCards = () => {
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
  cards.forEach((card) => cardsElement.append(createCard(card.name, card.link)));
};

const setPopupsEventListeners = () => {
  const popups = Array.from(document.querySelectorAll('.popup'));
  popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      closePopupByOverlayClick(evt);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initCards();
  setPopupsEventListeners();
});

profileEditBtn.addEventListener('click', openProfilePopup);
profileCloseBtn.addEventListener('click', () => closePopup(profilePopup));
profileEditForm.addEventListener('submit', saveProfileInfo);
cardAddBtn.addEventListener('click', () => openPopup(cardPopup));
cardCloseBtn.addEventListener('click', () => closePopup(cardPopup));
cardAddForm.addEventListener('submit', addNewCard);
photoCloseBtn.addEventListener('click', () => closePopup(photoPopup));
