import axios from "axios";
import { MICROBLINK_API_TOKEN } from "react-native-dotenv";
const microblink = axios.create({
  baseURL: "https://api.microblink.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${MICROBLINK_API_TOKEN}`
  }
});

function microblink_post_recognizers_idbarcode_create(payload) {
  return microblink.post(`/recognizers/id-barcode`, payload.data);
}

function microblink_post_recognizers_blinkidcombined_create(payload) {
  return microblink.post(`/recognizers/blinkid-combined`, payload.data);
}

export const apiService = {
  microblink_post_recognizers_idbarcode_create,
  microblink_post_recognizers_blinkidcombined_create
};