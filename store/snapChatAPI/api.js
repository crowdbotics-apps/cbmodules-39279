import axios from "axios"
import { SNAPCHAT_API_TOKEN } from "react-native-dotenv"
const snapChatAPI = axios.create({
  baseURL: "https://adsapi.snapchat.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${SNAPCHAT_API_TOKEN}`
  }
})
function snapchatapi_get_v1_me_list(payload) {
  return snapChatAPI.get(`/v1/me`)
}
export const apiService = { snapchatapi_get_v1_me_list }
