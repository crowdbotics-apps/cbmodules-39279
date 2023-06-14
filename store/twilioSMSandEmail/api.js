import axios from "axios";
import { TWILIO_SMS_AND_EMAIL_USERNAME, TWILIO_SMS_AND_EMAIL_PASSWORD } from "react-native-dotenv";
const twilioSMSandEmail = axios.create({
  baseURL: "https://api.twilio.com",
  auth: {
    username: TWILIO_SMS_AND_EMAIL_USERNAME,
    password: TWILIO_SMS_AND_EMAIL_PASSWORD
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function twiliosmsandemail_post_20100401_Accounts_account_sid_Keysjson_create(payload) {
  return twilioSMSandEmail.post(`/2010-04-01/Accounts/${payload.account_sid}/Keys.json`, payload.data);
}

function twiliosmsandemail_get_20100401_Accounts_account_sid_Keys_sidjson_read(payload) {
  return twilioSMSandEmail.get(`/2010-04-01/Accounts/${payload.account_sid}/Keys/${payload.sid}.json`);
}

export const apiService = {
  twiliosmsandemail_post_20100401_Accounts_account_sid_Keysjson_create,
  twiliosmsandemail_get_20100401_Accounts_account_sid_Keys_sidjson_read
};