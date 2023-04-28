import axios from "axios"
import { UBER_EAT_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const uberEatIntegration = axios.create({
  baseURL: "https://api.uber.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${UBER_EAT_API_INTEGRATION_TOKEN}`
  }
})
function ubereatintegration_get_eats_stores_read(payload) {
  return uberEatIntegration.get(`/eats/stores/`)
}
function ubereatintegration_get_eats_stores_store_id_pos_data_read(payload) {
  return uberEatIntegration.get(`/eats/stores/${payload.store_id}/pos_data`)
}
export const apiService = {
  ubereatintegration_get_eats_stores_read,
  ubereatintegration_get_eats_stores_store_id_pos_data_read
}
