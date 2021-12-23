import { cardComponentSelectors, cardActiveLikeButtonClass } from '../utils/constants.js';
import { getElement } from '../utils/utils.js';

class Card {
  constructor({ name, link }, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._card = this._getCardComposition();
  }

  _getTemplate() {
    return getElement(cardComponentSelectors.card, getElement(this._templateSelector).content).cloneNode(true);
  }

  _getCardComposition() {
    return {
      photo: getElement(cardComponentSelectors.photo, this._element),
      title: getElement(cardComponentSelectors.title, this._element),
      likeButton: getElement(cardComponentSelectors.likeButton, this._element),
      deleteButton: getElement(cardComponentSelectors.deleteButton, this._element),
    };
  }

  _remove(evt) {
    evt.target.closest(cardComponentSelectors.card).remove();
  }

  _toggleLike(evt) {
    evt.target.classList.toggle(cardActiveLikeButtonClass);
  }

  _setEventListeners() {
    this._card.photo.addEventListener('click', (evt) => this._handleCardClick(evt.target.src, evt.target.alt));
    this._card.likeButton.addEventListener('click', (evt) => this._toggleLike(evt));
    this._card.deleteButton.addEventListener('click', (evt) => this._remove(evt));
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
