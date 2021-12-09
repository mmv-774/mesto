import Popup from './Popup.js';

class ProfilePopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._profileComposition = this._getProfileComposition();
    this._saveProfile = this._saveProfile.bind(this);
  }

  _getProfileComposition() {
    return {
      form: this._element.querySelector('.form'),
      newName: this._element.querySelector('.form').querySelector('.user-name-input'),
      newProfession: this._element.querySelector('.form').querySelector('.user-profession-input'),
      name: document.querySelector('.profile__title'),
      profession: document.querySelector('.profile__subtitle'),
    };
  }

  _saveProfile(evt) {
    evt.preventDefault();
    this._profileComposition.name.textContent = this._profileComposition.newName.value;
    this._profileComposition.profession.textContent = this._profileComposition.newProfession.value;
    super.close();
  }

  _setEventListeners() {
    this._profileComposition.form.addEventListener('submit', this._saveProfile);
    super._setEventListeners();
  }

  _removeEventListeners() {
    this._profileComposition.form.removeEventListener('submit', this._saveProfile);
    super._removeEventListeners();
  }

  open() {
    this._profileComposition.newName.value = this._profileComposition.name.textContent;
    this._profileComposition.newProfession.value = this._profileComposition.profession.textContent;
    super.open();
  }
}

export default ProfilePopup;
