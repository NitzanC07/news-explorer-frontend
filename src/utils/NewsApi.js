class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    customFetch(url, headers) {
      return fetch(url, headers)
      .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
    } 
  
    // other methods for working with the API
  
    getArticles() {
      return this.customFetch(`${this._baseUrl}/articles`, {
        headers: this._headers,
        method: 'GET' // default option
      })
    }
    
    changeSavedCardStatus(cardId, isSaved) {
      const methodType = isSaved ? 'PUT' : 'DELETE'
      return this.customFetch(`${this._baseUrl}/articles/saved/${cardId}`, {
        headers: this._headers, 
        method: methodType,     
      })
    }
  }
  
  
  // API key: 2fcf2a6183714400b92824aef8d7835e
  const api = new Api({
      baseUrl: "https://newsapi.org/everything",
      headers: {
        authorization: "2fcf2a6183714400b92824aef8d7835e",
        "Content-Type": "application/json"
      }
  });
  
  export default api;
  