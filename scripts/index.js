const profileElement = document.querySelector('.profile');
const popupElement = document.querySelector('.popup');
const nameElement = profileElement.querySelector('.profile__title');
const profElement = profileElement.querySelector('.profile__subtitle');
const editBtn = profileElement.querySelector('.profile__btn.profile__btn_action_edit');
const closeBtn = popupElement.querySelector('.popup__btn');
const formElement = popupElement.querySelector('.form');
const nameInput = formElement.querySelector('#user-name');
const profInput = formElement.querySelector('#user-profession');
const cardsElement = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;
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

cards.forEach(card => addCard(card.name, card.link));

function addCard(name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__photo').src = link;
  cardElement.querySelector('.card__photo').alt = name;
  cardElement.querySelector('.card__title').textContent = name;
  cardsElement.append(cardElement);
}

function popupOpen() {
  nameInput.value = nameElement.textContent;
  profInput.value = profElement.textContent;
  popupElement.classList.add('popup_opened');
}

function popupClose() {
  popupElement.classList.remove('popup_opened');
}

function formSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  profElement.textContent = profInput.value;
  popupClose();
}

editBtn.addEventListener('click', popupOpen);
closeBtn.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmit);
