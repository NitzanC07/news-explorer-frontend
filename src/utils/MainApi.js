const BASE_URL = "https://api.nitzan-fp.students.nomoredomainssbs.ru";

export const checkResponse = (res) => {
    // console.log(`checkResponse: ${res}`);
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error in response from the server: ${res.status}`)
    }
  }

export const getSavedArticles = (jwt) => {
    return fetch(`${BASE_URL}/articles`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    })
    .then(checkResponse)
}

export const createNewArticle = (jwt, articleData) => {
    return fetch(`${BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
    })
    .then(checkResponse)
}

export const savedArticle = (jwt, articleId) => {
    return fetch(`${BASE_URL}/articles/${articleId}/saved`, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    })
    .then(checkResponse)
}

export const unsavedArticle = (jwt, articleId) => {
    return fetch(`${BASE_URL}/articles/${articleId}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    })
    .then(checkResponse)
}
