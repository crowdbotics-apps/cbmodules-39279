import axios from "axios";
import { GOOGLE_TRANSLATE_INTEGRATION_NAME } from "react-native-dotenv";
const googleTranslateIntegration = axios.create({
  baseURL: "https://translation.googleapis.com",
  params: {
    key: GOOGLE_TRANSLATE_INTEGRATION_NAME
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function googletranslateintegration_post_language_translate_v2_create(payload) {
  return googleTranslateIntegration.post(`/language/translate/v2`, {
    params: {
      q: payload.q,
      target: payload.target
    }
  });
}

export const apiService = {
  googletranslateintegration_post_language_translate_v2_create
};