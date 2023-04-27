import axios from "axios"
import { SENDGRID_API_TOKEN } from "react-native-dotenv"
const sendGridAPI = axios.create({
  baseURL: "https://api.sendgrid.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${SENDGRID_API_TOKEN}`
  }
})
function sendgridapi_post_v3_mail_send_create(payload) {
  return sendGridAPI.post(`/v3/mail/send`, payload.data)
}
export const apiService = { sendgridapi_post_v3_mail_send_create }
