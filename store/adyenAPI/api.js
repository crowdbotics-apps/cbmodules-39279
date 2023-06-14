import axios from "axios";
import { ADYEN_API_INTEGRATION_TOKEN } from "react-native-dotenv";
const adyenAPI = axios.create({
  baseURL: "https://checkout-test.adyen.com/v67",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${ADYEN_API_INTEGRATION_TOKEN}`
  }
});

function adyenapi_post_payments_create(payload) {
  return adyenAPI.post(`/payments`, payload.data);
}

function adyenapi_post_paymentMethods_create(payload) {
  return adyenAPI.post(`/paymentMethods`, payload.data);
}

function adyenapi_post_payments_details_create(payload) {
  return adyenAPI.post(`/payments/details`, payload.data);
}

export const apiService = {
  adyenapi_post_payments_create,
  adyenapi_post_paymentMethods_create,
  adyenapi_post_payments_details_create
};