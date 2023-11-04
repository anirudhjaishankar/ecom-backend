import { baseUrl, product } from "../constants";

export function getProductById(id) {
  return fetch(baseUrl + product.getProduct + id);
}
