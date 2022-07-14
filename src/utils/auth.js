export const BASE_URL = "http://localhost:3000";

export const checkResponse = (res) => {
  console.log(`checkResponse: ${res}`);
  if(res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error in response from the server: ${res.status}`)
  }
}

export const register = ({email, password}) => {
  // console.log('auth-register:', email, password);
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      "password": password,
      "email": email
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
  return fetch(`${BASE_URL}`, {
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
  // console.log(jwt);
  return fetch(`${BASE_URL}`, {
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