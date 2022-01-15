import { getElement } from '../utils/utils.js';

class UserInfo {
  constructor(nameElementSelector, aboutElementSelector, avatarElementSelector) {
    this._nameElement = getElement(nameElementSelector);
    this._aboutElement = getElement(aboutElementSelector);
    this._avatarElement = getElement(avatarElementSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
  }

  setUserInfo({ name, about, avatar }) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
    this._avatarElement.src = avatar;
  }
}

export default UserInfo;
