import axios from "axios";
import { DIGITAL_WALLET_API_TOKEN } from "react-native-dotenv";
const digitalwallet = axios.create({
  baseURL: "https://sandbox.silamoney.com/0.2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${DIGITAL_WALLET_API_TOKEN}`
  }
});

function digitalwallet_post_get_wallet_create(payload) {
  return digitalwallet.post(`/get_wallet`, payload.data);
}

function digitalwallet_post_register_wallet_create(payload) {
  return digitalwallet.post(`/register_wallet`, payload.data);
}

export const apiService = {
  digitalwallet_post_get_wallet_create,
  digitalwallet_post_register_wallet_create
};