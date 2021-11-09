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

cards.forEach((card) => cardsElement.append(cardCreate(card.name, card.link)));

function popupOpen(popup) {
  popup.classList.add('popup_opened');
}

function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

function profileFormOpen() {
  profileNewName.value = profileName.textContent;
  profileNewProfession.value = profileProfession.textContent;
  popupOpen(profilePopup);
}

function profileFormClose() {
  popupClose(profilePopup);
  profileEditForm.reset();
}

function profileFormSave(evt) {
  evt.preventDefault();
  profileName.textContent = profileNewName.value;
  profileProfession.textContent = profileNewProfession.value;
  profileFormClose();
}

function cardFormOpen() {
  popupOpen(cardPopup);
}

function cardFormClose() {
  popupClose(cardPopup);
  cardAddForm.reset();
}

function cardFormSave(evt) {
  evt.preventDefault();
  cardsElement.prepend(cardCreate(cardNewName.value, cardNewLink.value));
  cardFormClose();
}

function cardCreate(name, link) {
  const newCard = cardElement.cloneNode(true);
  newCard.querySelector('.card__photo').src = link;
  newCard.querySelector('.card__photo').alt = name;
  newCard.querySelector('.card__title').textContent = name;
  return newCard;
}

profileEditBtn.addEventListener('click', profileFormOpen);
profileCloseBtn.addEventListener('click', profileFormClose);
profileEditForm.addEventListener('submit', profileFormSave);
cardAddBtn.addEventListener('click', cardFormOpen);
cardCloseBtn.addEventListener('click', cardFormClose);
cardAddForm.addEventListener('submit', cardFormSave);
