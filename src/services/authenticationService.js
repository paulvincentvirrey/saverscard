import { BehaviorSubject } from "rxjs";
import { handleResponse } from "../helpers/handleResponse";

const config = {
  apiUrl: "https://saverscardapi.azurewebsites.net"
  // apiUrl: "http://localhost:4000"
};

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  }
};

function login(loginAs, email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ loginAs, email, password })
  };

  return fetch(`${config.apiUrl}/auth/login`, requestOptions)
    .then(handleResponse)
    .then(x => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      x.user.role = x.user.isAdmin ? "Admin" : "User";
      localStorage.setItem("currentUser", JSON.stringify(x));
      currentUserSubject.next(x);
      return x;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
