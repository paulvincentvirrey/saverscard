import { authHeader } from "../helpers/authHeader";
import { handleResponse } from "../helpers/handleResponse";

const config = {
  apiUrl: "https://saverscardapi.azurewebsites.net/api"
};

export const paymentService = {
  chargePayment
};

function chargePayment(token) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({ token: token.id })
  };

  return fetch(`${config.apiUrl}/payment`, requestOptions)
    .then(handleResponse)
    .then(user => {
      return user;
    });
}
