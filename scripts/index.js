const profileElement = document.querySelector('.profile');
const popupElement = document.querySelector('.popup');
const nameElement = profileElement.querySelector('.profile__title');
const professionElement = profileElement.querySelector('.profile__subtitle');
const editBtn = profileElement.querySelector('.profile__btn.profile__btn_action_edit');
const closeBtn = popupElement.querySelector('.popup__btn');
const formElement = popupElement.querySelector('.profile-edit');
const inputElements = popupElement.querySelectorAll('.profile-edit__input');

function popupOpen() {
  inputElements[0].value = nameElement.textContent;
  inputElements[1].value = professionElement.textContent;
  popupElement.classList.add('popup_opened');
}

function popupClose() {
  popupElement.classList.remove('popup_opened');
}

function formSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = inputElements[0].value;
  professionElement.textContent = inputElements[1].value;
  popupClose();
}

editBtn.addEventListener('click', popupOpen);
closeBtn.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmit);
