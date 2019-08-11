import { authHeader } from "../helpers/authHeader";
import { handleResponse } from "../helpers/handleResponse";

const config = {
  apiUrl: "http://saverscardapi.azurewebsites.net/api"
  // apiUrl: "http://localhost:4000/api"
};

export const vendorService = {
  getAll,
  getById,
  createVendor,
  updateVendor
};

function getAll() {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/vendors`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/vendors/${id}`, requestOptions).then(
    handleResponse
  );
}

function createVendor(vendor) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(vendor)
  };

  return fetch(`${config.apiUrl}/vendors`, requestOptions)
    .then(handleResponse)
    .then(vendor => {
      return vendor;
    });
}

function updateVendor(id, vendor) {
  const requestOptions = {
    method: "PATCH",
    headers: authHeader(),
    body: JSON.stringify(vendor)
  };

  return fetch(`${config.apiUrl}/vendors/${id}`, requestOptions)
    .then(handleResponse)
    .then(vendor => {
      return vendor;
    });
}
