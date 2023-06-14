import axios from "axios";
import { TWILIO_PHONE_CALLS_USERNAME, TWILIO_PHONE_CALLS_PASSWORD } from "react-native-dotenv";
const twilioPhoneCalls = axios.create({
  baseURL: "https://api.twilio.com",
  auth: {
    username: TWILIO_PHONE_CALLS_USERNAME,
    password: TWILIO_PHONE_CALLS_PASSWORD
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function twiliophonecalls_post_20100401_Accounts_account_sid_Callsjson_create(payload) {
  return twilioPhoneCalls.post(`/2010-04-01/Accounts/${payload.account_sid}/Calls.json`, payload.data);
}

export const apiService = {
  twiliophonecalls_post_20100401_Accounts_account_sid_Callsjson_create
};