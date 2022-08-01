const BASE_URL = "https://api.nitzan-fp.students.nomoredomainssbs.ru";

const customFetch = (url, headers) => {
    return fetch(url, headers)
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
  } 

export const getSavedArticles = (jwt) => {
    return customFetch(`${BASE_URL}/articles`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    })
}

export const createNewArticle = (jwt, articleData) => {
    console.log(`articleData: ${articleData}`);
    return customFetch(`${BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
    })
}

export const unsavedArticle = (jwt, articleId) => {
    return customFetch(`${BASE_URL}/articles/${articleId}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        }
    })
}
