class UserInfo {
  constructor(nameElementSelector, professionElementSelector) {
    this._nameElement = document.querySelector(nameElementSelector);
    this._professionElement = document.querySelector(professionElementSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      profession: this._professionElement.textContent,
    };
  }

  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._professionElement.textContent = data.profession;
  }
}

export default UserInfo;
