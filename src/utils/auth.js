// export const BASE_URL = "https://api.nitzan-practicum.students.nomoredomainssbs.ru";
const BASE_URL_local = "http://localhost:4000";

export const checkResponse = (res) => {
  // console.log(`checkResponse: ${res}`);
  if(res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error in response from the server: ${res.status}`)
  }
}

export const register = (email, password, username) => {
  // console.log('auth-register:', email, password, username);
  return fetch(`${BASE_URL_local}/signup`, {
    method: "POST",
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      password: password,
      email: email, 
      username: username
    }),
  })
  .then(checkResponse)
  .then((res) => {
    // console.log(`res: ${res}`);
    return res;
  }) 
}

export const login = (email, password) => {
  // console.log('auth-login:', email, password);
  return fetch(`${BASE_URL_local}/signin`, {
    method: "POST",
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      'email': email,
      'password': password
    }),
  })
  .then(checkResponse)
};

export const getContent = (jwt) => {
  // console.log(`in getContent function: ${jwt}`);
  return fetch(`${BASE_URL_local}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${jwt}`,
    }
  })
  .then(checkResponse)
  .then((data) => {
    return data;
  })
}