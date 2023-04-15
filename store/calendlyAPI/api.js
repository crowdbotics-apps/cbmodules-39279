import axios from "axios"
import { CALENDLY_API_TOKEN } from "react-native-dotenv"
const calendlyAPI = axios.create({
  baseURL: "https://api.calendly.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${CALENDLY_API_TOKEN}`
  }
})
function calendlyapi_get_users_me_read(payload) {
  return calendlyAPI.get(`users/me`)
}
export const apiService = { calendlyapi_get_users_me_read }
