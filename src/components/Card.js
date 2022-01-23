import { cardComponentSelectors, cardActiveLikeButtonClass } from '../utils/constants.js';
import { getElement } from '../utils/utils.js';

class Card {
  constructor(
    { _id, name, link, likes, owner },
    userId,
    templateSelector,
    { handleCardClick, handleDeleteCardClick, handleLikeCardClick }
  ) {
    this.id = _id;
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._owner = owner;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleLikeCardClick = handleLikeCardClick;
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

  _isOwner() {
    return this._owner._id === this._userId;
  }

  _toggleLike() {
    this._composition.likeButton.classList.toggle(cardActiveLikeButtonClass);
  }

  _setLikes(likes) {
    this._likes = likes;
    this._composition.likeCount.textContent = this._likes.length;
  }

  _setEventListeners() {
    this._composition.photo.addEventListener('click', (evt) => this._handleCardClick(evt.target.src, evt.target.alt));
    this._composition.likeButton.addEventListener('click', () => this._handleLikeCardClick(this));
    if (this._isOwner()) {
      this._composition.deleteButton.addEventListener('click', () => this._handleDeleteCardClick(this.id));
    }
  }

  isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  renderLikeState({ likes }) {
    this._setLikes(likes);
    this._toggleLike();
  }

  create() {
    this._setEventListeners();
    this._element.id = this.id;
    this._composition.photo.src = this._link;
    this._composition.photo.alt = this._name;
    this._composition.title.textContent = this._name;
    this._composition.likeCount.textContent = this._likes.length;
    this._composition.deleteButton.hidden = !this._isOwner();
    if (this.isLiked()) {
      this._toggleLike();
    }

    return this._element;
  }
}

export default Card;
