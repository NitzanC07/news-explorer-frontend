class NewsApi {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    customFetch(url, headers) {
      return fetch(url, headers)
      .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
    } 
  
    // other methods for working with the API
  
    getArticles(keyword, currentDate, weekAgo) {
      return this.customFetch(`${this._baseUrl}&q=${keyword}&from=${weekAgo}&to=${currentDate}&pageSize=100`, {
        headers: this._headers,
        method: 'GET'
      })
    }
  }

// API key: 2fcf2a6183714400b92824aef8d7835e
const newsApi = new NewsApi({
    baseUrl: `https://nomoreparties.co/news/v2/everything?apiKey=2fcf2a6183714400b92824aef8d7835e`,
    headers: {
      "Content-Type": "application/json",
      
    }
});

export default newsApi;
  