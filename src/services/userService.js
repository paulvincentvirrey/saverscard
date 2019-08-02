import { authHeader } from "../helpers/authHeader";
import { handleResponse } from "../helpers/handleResponse";

const config = {
  apiUrl: "http://localhost:4000"
};

export const userService = {
  getAll,
  getById
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
