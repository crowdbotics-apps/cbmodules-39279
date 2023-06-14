import axios from "axios"
import { AVATAR_CREATION_INTEGRATION_TOKEN } from "react-native-dotenv"
const avatarCreationIntegration = axios.create({
  baseURL: "https://api.avatarsdk.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${AVATAR_CREATION_INTEGRATION_TOKEN}`
  }
})
function avatarcreationintegration_get_players_read(payload) {
  return avatarCreationIntegration.get(`/players/`)
}
function avatarcreationintegration_post_players_create(payload) {
  return avatarCreationIntegration.post(`/players/`, payload.data)
}
export const apiService = {
  avatarcreationintegration_get_players_read,
  avatarcreationintegration_post_players_create
}
