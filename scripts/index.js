import Card from './Card.js';
import CardPopup from './CardPopup.js';
import ProfilePopup from './ProfilePopup.js';

const profilePopup = new ProfilePopup('.profile-popup');
const profileEditButton = document.querySelector('.profile__btn_action_edit');
const cardPopup = new CardPopup('.card-popup');
const cardAddButton = document.querySelector('.profile__btn_action_add');
const cardsContainer = document.querySelector('.cards');
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

function setEventListeners() {
  profileEditButton.addEventListener('click', () => profilePopup.open());
  cardAddButton.addEventListener('click', () => cardPopup.open());
}

function initCards(cards) {
  cards.forEach((card) => {
    cardsContainer.append(new Card(card, '.card-template').create());
  });
}

initCards(cards);
setEventListeners();
