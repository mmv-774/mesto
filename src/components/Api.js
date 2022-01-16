class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _sendRequest(path, options) {
    return fetch(`${this._baseUrl}${path}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  _getUserInfo() {
    return this._sendRequest('users/me', {
      headers: this._headers,
    });
  }

  _getCards() {
    return this._sendRequest('cards', {
      headers: this._headers,
    });
  }

  getUserPage() {
    return Promise.all([this._getUserInfo(), this._getCards()]);
  }
}

export default Api;
