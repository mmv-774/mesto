import { getElement } from '../utils/utils.js';

class UserInfo {
  constructor(nameElementSelector, aboutElementSelector, avatarElementSelector) {
    this._nameElement = getElement(nameElementSelector);
    this._aboutElement = getElement(aboutElementSelector);
    this._avatarElement = getElement(avatarElementSelector);
  }

  getUserInfo() {
    return {
      id: this._id,
      name: this._name,
      about: this._about,
    };
  }

  setUserInfo({ _id, name, about, avatar }) {
    this._id = _id;
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
    this._avatarElement.src = avatar;
  }

  setAvatar(avatar) {
    this._avatar = avatar;
  }
}

export default UserInfo;
