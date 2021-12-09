import PhotoPopup from './PhotoPopup.js';

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._card = this._getCardComposition();
    this._view = this._view.bind(this);
    this._toggleCardLike = this._toggleLike.bind(this);
    this._removeCard = this._remove.bind(this);
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
  }

  _getCardComposition() {
    return {
      photo: this._element.querySelector('.card__photo'),
      title: this._element.querySelector('.card__title'),
      likeButton: this._element.querySelector('.card__btn_action_like'),
      deleteButton: this._element.querySelector('.card__btn_action_delete'),
    };
  }

  _view(evt) {
    const photoPopup = new PhotoPopup('.photo-popup');
    photoPopup.open(evt.target.src, evt.target.alt);
  }

  _remove(evt) {
    evt.target.closest('.card').remove();
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('card__btn_active_like');
  }

  _setEventListeners() {
    this._card.photo.addEventListener('click', this._view);
    this._card.likeButton.addEventListener('click', this._toggleLike);
    this._card.deleteButton.addEventListener('click', this._remove);
  }

  create() {
    this._setEventListeners();
    this._card.photo.src = this._link;
    this._card.photo.alt = this._name;
    this._card.title.textContent = this._name;

    return this._element;
  }
}

export default Card;
