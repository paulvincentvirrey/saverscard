import { authHeader } from "../helpers/authHeader";
import { handleResponse } from "../helpers/handleResponse";

const config = {
  // apiUrl: "http://saverscardapi.azurewebsites.net"
  apiUrl: "http://localhost:4000/api"
};

export const userService = {
  getAll,
  getById,
  createUser
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users`, requestOptions)
    .then(handleResponse)
    .then(user => {
      return user;
    });
}
