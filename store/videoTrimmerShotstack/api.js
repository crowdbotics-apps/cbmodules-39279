import axios from "axios"
import { VIDEO_TRIMMER_SHOTSTACK_API_TOKEN } from "react-native-dotenv"
const videoTrimmerShotstack = axios.create({
  baseURL: "https://api.shotstack.io/serve/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${VIDEO_TRIMMER_SHOTSTACK_API_TOKEN}`
  }
})
function videotrimmershotstack_get_sources_read(payload) {
  return videoTrimmerShotstack.get(`/sources`)
}
function videotrimmershotstack_get_assets_id_list(payload) {
  return videoTrimmerShotstack.get(`/assets/${payload.id}`)
}
export const apiService = {
  videotrimmershotstack_get_sources_read,
  videotrimmershotstack_get_assets_id_list
}
