const profileElement = document.querySelector('.profile');
const popupElement = document.querySelector('.popup');
const nameElement = profileElement.querySelector('.profile__title');
const profElement = profileElement.querySelector('.profile__subtitle');
const editBtn = profileElement.querySelector('.profile__btn.profile__btn_action_edit');
const closeBtn = popupElement.querySelector('.popup__btn');
const formElement = popupElement.querySelector('.form');
const nameInput = formElement.querySelector('#user-name');
const profInput = formElement.querySelector('#user-profession');

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
