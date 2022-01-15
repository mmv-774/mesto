class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  async _sendRequest(path, options) {
    const res = await fetch(`${this._baseUrl}${path}`, options);
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Ошибка: ${res.status}`);
  }
}

export default Api;
