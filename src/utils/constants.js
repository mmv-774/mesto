export const apiOptions = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-34/',
  headers: {
    authorization: 'e8d66936-78b1-41af-9c0d-88294d055d2e',
    'Content-Type': 'application/json',
  },
};

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
  name: '.profile__title',
  about: '.profile__subtitle',
  avatar: '.profile__avatar',
  editButton: '.profile__btn_action_edit',
  addButton: '.profile__btn_action_add',
};

export const profileFormInputSelectors = {
  name: '.user-name-input',
  about: '.user-profession-input',
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
  likeCount: '.card__like-count',
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
