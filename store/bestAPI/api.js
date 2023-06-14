import axios from "axios"
import { BEST_365_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const bestAPI = axios.create({
  baseURL: "https://betsapi2.p.rapidapi.com/v1/bet365",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${BEST_365_API_INTEGRATION_TOKEN}`
  }
})
function best365api_get_upcoming_read(payload) {
  return bestAPI.get(`/upcoming`, { params: { sport_id: payload.sport_id } })
}
function best365api_get_inplay_filter_read(payload) {
  return bestAPI.get(`/inplay_filter`, {
    params: { sport_id: payload.sport_id }
  })
}
export const apiService = {
  best365api_get_upcoming_read,
  best365api_get_inplay_filter_read
}
