import { authHeader } from "../helpers/authHeader";
import { handleResponse } from "../helpers/handleResponse";

const config = {
  // apiUrl: "http://saverscardapi.azurewebsites.net"
  apiUrl: "http://localhost:4000/api"
};

export const vendorService = {
  getAll,
  getById,
  createVendor
};

function getAll() {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/api/vendors`, requestOptions).then(
    handleResponse
  );
}

function getById(id) {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/api/vendors/${id}`, requestOptions).then(
    handleResponse
  );
}

function createVendor(vendor) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(vendor)
  };

  return fetch(`${config.apiUrl}/vendors`, requestOptions)
    .then(handleResponse)
    .then(vendor => {
      return vendor;
    });
}
