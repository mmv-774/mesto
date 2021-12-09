import Popup from './Popup.js';
import Card from './Card.js';

class CardPopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardComposition = this._getCardFormComposition();
    this._addCard = this._addCard.bind(this);
  }

  _getCardFormComposition() {
    return {
      form: this._element.querySelector('.form'),
      name: this._element.querySelector('.form').querySelector('.card-name-input'),
      link: this._element.querySelector('.form').querySelector('.card-link-input'),
    };
  }

  _addCard(evt) {
    evt.preventDefault();
    const card = {
      name: this._cardComposition.name.value,
      link: this._cardComposition.link.value,
    };
    document.querySelector('.cards').prepend(new Card(card, '.card-template').create());
    super.close();
    this._cardComposition.form.reset();
  }

  _setEventListeners() {
    this._cardComposition.form.addEventListener('submit', this._addCard);
    super._setEventListeners();
  }

  _removeEventListeners() {
    this._cardComposition.form.removeEventListener('submit', this._addCard);
    super._removeEventListeners();
  }
}

export default CardPopup;
