import axios from "axios"
import {
  TWILIO_PANIC_BUTTON_USERNAME,
  TWILIO_PANIC_BUTTON_PASSWORD
} from "react-native-dotenv"
const twilioPanicButton = axios.create({
  baseURL: "https://api.twilio.com",
  auth: {
    username: TWILIO_PANIC_BUTTON_USERNAME,
    password: TWILIO_PANIC_BUTTON_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function twiliopanicbutton_post_20100401_Accounts_account_id_Messagesjson_create(
  payload
) {
  return twilioPanicButton.post(
    `/2010-04-01/Accounts/${payload.account_id}/Messages.json`,
    payload.data
  )
}
export const apiService = {
  twiliopanicbutton_post_20100401_Accounts_account_id_Messagesjson_create
}
