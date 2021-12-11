class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._card = this._getCardComposition();
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

  _remove(evt) {
    evt.target.closest('.card').remove();
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('card__btn_active_like');
  }

  _setEventListeners() {
    this._card.photo.addEventListener('click', (evt) =>
      this._handleCardClick(evt.target.alt, evt.target.src)
    );
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
