import axios from "axios";
const eSignature = axios.create({
  baseURL: "https://www.crowdbotics.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function esignature_post_webhook_create(payload) {
  return eSignature.post(`webhook/`);
}

export const apiService = {
  esignature_post_webhook_create
};