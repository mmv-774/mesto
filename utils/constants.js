export const popupElementSelectors = {
  profile: '.profile-popup',
  card: '.card-popup',
  photo: '.photo-popup',
};

export const formComponentSelectors = {
  form: '.form',
  title: '.form__title',
  input: '.form__input',
  handler: '.form__handler',
};

export const profileComponentSelectors = {
  title: '.profile__title',
  subtitle: '.profile__subtitle',
  editButton: '.profile__btn_action_edit',
  addButton: '.profile__btn_action_add',
};

export const profileFormInputSelectors = {
  name: '.user-name-input',
  profession: '.user-profession-input',
};

export const photoComponentSelectors = {
  photo: '.photo',
  image: '.photo__img',
  caption: '.photo__caption',
};

export const cardComponentSelectors = {
  card: '.card',
  photo: '.card__photo',
  title: '.card__title',
  likeButton: '.card__btn_action_like',
  deleteButton: '.card__btn_action_delete',
};

export const cardFormInputSelectors = {
  name: '.card-name-input',
  link: '.card-link-input',
};

export const cardTemplateSelector = '.card-template';
export const cardsContainerSelector = '.cards';
export const cardActiveLikeButtonClass = 'card__btn_active_like';

export const popupOpenClass = 'popup_opened';
export const popupCloseButtonClass = 'popup__close';

export const formValidatorConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__handler',
  inactiveButtonClass: 'form__handler_disabled',
  inputErrorClass: 'form__input_type_error',
  activeErrorClass: 'form__input-error_active',
  errorSelectorPostfix: 'input-error',
};

export const cards = [
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
