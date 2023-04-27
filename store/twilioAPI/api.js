import axios from "axios"
import { TWILIO_API_TOKEN } from "react-native-dotenv"
const twilioAPI = axios.create({
  baseURL: "https://api.twilio.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${TWILIO_API_TOKEN}`
  }
})
function twilioapi_post_20100401_Accounts_account_sid_Messagesjson_create(
  payload
) {
  return twilioAPI.post(
    `/2010-04-01/Accounts/account_sid/Messages.json`,
    payload.data
  )
}
export const apiService = {
  twilioapi_post_20100401_Accounts_account_sid_Messagesjson_create
}
