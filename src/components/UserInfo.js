import { getElement } from '../utils/utils.js';

class UserInfo {
  constructor(nameElementSelector, professionElementSelector) {
    this._nameElement = getElement(nameElementSelector);
    this._professionElement = getElement(professionElementSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      profession: this._professionElement.textContent,
    };
  }

  setUserInfo({ name, profession }) {
    this._nameElement.textContent = name;
    this._professionElement.textContent = profession;
  }
}

export default UserInfo;
