import { baseUrl, auth } from "../constants";
export function login(email, password) {
  return fetch(baseUrl + auth.login, {
    method: "GET",
    headers: {
      authorization: "Basic " + btoa(email + ":" + password),
    },
  });
}
