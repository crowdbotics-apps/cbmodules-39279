import axios from "axios"
import {
  TWILIO_VIDEO_CHAT_USERNAME,
  TWILIO_VIDEO_CHAT_PASSWORD
} from "react-native-dotenv"
const twilioVideoChat = axios.create({
  baseURL: "https://video.twilio.com",
  auth: {
    username: TWILIO_VIDEO_CHAT_USERNAME,
    password: TWILIO_VIDEO_CHAT_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function twiliovideochat_get_v1_Rooms_read(payload) {
  return twilioVideoChat.get(`/v1/Rooms`)
}
function twiliovideochat_post_v1_Rooms_create(payload) {
  return twilioVideoChat.post(`/v1/Rooms`, payload.data)
}
export const apiService = {
  twiliovideochat_get_v1_Rooms_read,
  twiliovideochat_post_v1_Rooms_create
}
