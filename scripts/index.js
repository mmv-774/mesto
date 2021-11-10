const profileName = document.querySelector('.profile .profile__title');
const profileProfession = document.querySelector('.profile .profile__subtitle');
const profileEditBtn = document.querySelector('.profile .profile__btn.profile__btn_action_edit');
const profilePopup = document.querySelector('#profile-edit');
const profileCloseBtn = profilePopup.querySelector('.popup__btn');
const profileEditForm = profilePopup.querySelector('.form');
const profileNewName = profileEditForm.querySelector('#user-name');
const profileNewProfession = profileEditForm.querySelector('#user-profession');
const cardTemplate = document.querySelector('#card').content;
const cardAddBtn = document.querySelector('.profile .profile__btn.profile__btn_action_add');
const cardPopup = document.querySelector('#card-add');
const cardCloseBtn = cardPopup.querySelector('.popup__btn');
const cardAddForm = cardPopup.querySelector('.form');
const cardNewName = cardAddForm.querySelector('#card-name');
const cardNewLink = cardAddForm.querySelector('#card-link');
const cardElement = cardTemplate.querySelector('.card');
const cardsElement = document.querySelector('.cards');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openProfileForm() {
  profileNewName.value = profileName.textContent;
  profileNewProfession.value = profileProfession.textContent;
  openPopup(profilePopup);
}

function closeProfileForm() {
  closePopup(profilePopup);
  setTimeout(() => {
    profileEditForm.reset();
  }, parseFloat(window.getComputedStyle(profilePopup, null).transitionDuration) * 1000);
}

function saveProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = profileNewName.value;
  profileProfession.textContent = profileNewProfession.value;
  closeProfileForm();
}

function openCardForm() {
  openPopup(cardPopup);
}

function closeCardForm() {
  closePopup(cardPopup);
  setTimeout(() => {
    cardAddForm.reset();
  }, parseFloat(window.getComputedStyle(cardPopup, null).transitionDuration) * 1000);
}

function saveCardForm(evt) {
  evt.preventDefault();
  cardsElement.prepend(createCard(cardNewName.value, cardNewLink.value));
  closeCardForm();
}

function createCard(name, link) {
  const card = cardElement.cloneNode(true);
  const photo = card.querySelector('.card__photo');
  const title = card.querySelector('.card__title');
  const like = card.querySelector('.card__btn_action_like');
  photo.src = link;
  photo.alt = name;
  title.textContent = name;
  like.addEventListener('click', (evt) => evt.target.classList.toggle('card__btn_active_like'));
  return card;
}

function initCards() {
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
}

document.addEventListener('DOMContentLoaded', initCards);
profileEditBtn.addEventListener('click', openProfileForm);
profileCloseBtn.addEventListener('click', closeProfileForm);
profileEditForm.addEventListener('submit', saveProfileForm);
cardAddBtn.addEventListener('click', openCardForm);
cardCloseBtn.addEventListener('click', closeCardForm);
cardAddForm.addEventListener('submit', saveCardForm);
