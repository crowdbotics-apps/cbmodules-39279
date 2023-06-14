import axios from "axios";
const simplex = axios.create({
  baseURL: "https://sandbox.test-simplexcc.com/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function simplex_get_supported_countries_list(payload) {
  return simplex.get(`/supported_countries`);
}

function simplex_get_supported_crypto_currencies_list(payload) {
  return simplex.get(`/supported_crypto_currencies`, {
    params: {
      public_key: payload.public_key
    }
  });
}

export const apiService = {
  simplex_get_supported_countries_list,
  simplex_get_supported_crypto_currencies_list
};