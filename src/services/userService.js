import { authHeader } from "../helpers/authHeader";
import { handleResponse } from "../helpers/handleResponse";

const config = {
  apiUrl: "https://saverscardapi.azurewebsites.net/api"
  // apiUrl: "http://localhost:4000/api"
};

export const userService = {
  getAll,
  getById,
  createUser,
  updateUser,
  updatePassword
};

function getAll() {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

function createUser(user) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users`, requestOptions)
    .then(handleResponse)
    .then(user => {
      return user;
    });
}

function updateUser(id, user) {
  const requestOptions = {
    method: "PATCH",
    headers: authHeader(),
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions)
    .then(handleResponse)
    .then(user => {
      return user;
    });
}

function updatePassword(id, password) {
  const requestOptions = {
    method: "PATCH",
    headers: authHeader(),
    body: JSON.stringify(password)
  };

  return fetch(`${config.apiUrl}/users/updatepassword/${id}`, requestOptions)
    .then(handleResponse)
    .then(m => {
      return m;
    });
}
