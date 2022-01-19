import { cardComponentSelectors, cardActiveLikeButtonClass } from '../utils/constants.js';
import { getElement } from '../utils/utils.js';

class Card {
  constructor({ _id, name, link, likes, owner }, userId, templateSelector, { handleCardClick, handleDeleteCardClick }) {
    this._id = _id;
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._owner = owner;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._composition = this._getCardComposition();
  }

  _getTemplate() {
    return getElement(cardComponentSelectors.card, getElement(this._templateSelector).content).cloneNode(true);
  }

  _getCardComposition() {
    return {
      photo: getElement(cardComponentSelectors.photo, this._element),
      title: getElement(cardComponentSelectors.title, this._element),
      likeCount: getElement(cardComponentSelectors.likeCount, this._element),
      likeButton: getElement(cardComponentSelectors.likeButton, this._element),
      deleteButton: getElement(cardComponentSelectors.deleteButton, this._element),
    };
  }

  _checkIsOwner() {
    return this._owner._id === this._userId;
  }

  _toggleLike(evt) {
    evt.target.classList.toggle(cardActiveLikeButtonClass);
  }

  _setEventListeners() {
    this._composition.photo.addEventListener('click', (evt) => this._handleCardClick(evt.target.src, evt.target.alt));
    this._composition.likeButton.addEventListener('click', (evt) => this._toggleLike(evt));
    if (this._checkIsOwner()) {
      this._composition.deleteButton.addEventListener('click', () => this._handleDeleteCardClick(this._id));
    }
  }

  create() {
    this._setEventListeners();
    this._element.id = this._id;
    this._composition.photo.src = this._link;
    this._composition.photo.alt = this._name;
    this._composition.title.textContent = this._name;
    this._composition.likeCount.textContent = this._likes.length;
    this._composition.deleteButton.hidden = !this._checkIsOwner();

    return this._element;
  }
}

export default Card;
