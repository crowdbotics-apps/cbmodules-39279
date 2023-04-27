import axios from "axios";
const currencyExchangeIntegration = axios.create({
  baseURL: "https://api.exchangerate.host",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function currencyexchangeintegration_get_latest_read(payload) {
  return currencyExchangeIntegration.get(`/latest`);
}

function currencyexchangeintegration_get_convert_read(payload) {
  return currencyExchangeIntegration.get(`/convert`, {
    params: {
      from: payload.from,
      to: payload.to
    }
  });
}

export const apiService = {
  currencyexchangeintegration_get_latest_read,
  currencyexchangeintegration_get_convert_read
};