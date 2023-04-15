import axios from "axios"
import {} from "react-native-dotenv"
const calendlyAPISupport = axios.create({
  baseURL: "https://api.calendly.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function calendlyapisupport_get_users_me_read(payload) {
  return calendlyAPISupport.get(`users/me`)
}
function calendlyapisupport_get_scheduled_events_list(payload) {
  return calendlyAPISupport.get(`scheduled_events`)
}
export const apiService = {
  calendlyapisupport_get_users_me_read,
  calendlyapisupport_get_scheduled_events_list
}
