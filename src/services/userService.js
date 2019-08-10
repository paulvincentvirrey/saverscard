import { authHeader } from "../helpers/authHeader";
import { handleResponse } from "../helpers/handleResponse";

const config = {
  apiUrl: "http://saverscardapi.azurewebsites.net/api"
  // apiUrl: "http://localhost:4000/api"
};

export const userService = {
  getAll,
  getById,
  createUser,
  updateUser
};

function getAll() {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/api/users`, requestOptions).then(
    handleResponse
  );
}

function getById(id) {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/api/users/${id}`, requestOptions).then(
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
