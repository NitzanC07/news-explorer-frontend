const BASE_URL = "https://api.nitzan-fp.students.nomoredomainssbs.ru";

export const getSavedArticles = (jwt) => {
    return fetch(`${BASE_URL}/articles`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json"
        }
    })
}

export const createNewArticle = (data) => {
    return fetch(`${BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${data.jwt}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data.articleData),
    })
}

export const savedArticle = (jwt, articleId) => {
    return fetch(`${BASE_URL}/articles/${articleId}/saved`, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json"
        }
    })
}
