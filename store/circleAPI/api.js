import axios from "axios"
import { CIRCLE_API_TOKEN } from "react-native-dotenv"
const circleAPI = axios.create({
  baseURL: "https://api-sandbox.circle.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${CIRCLE_API_TOKEN}`
  }
})
function circleapi_get_v1_businessAccount_wallets_addresses_deposit_read(
  payload
) {
  return circleAPI.get(`/v1/businessAccount/wallets/addresses/deposit`)
}
function circleapi_post_v1_businessAccount_wallets_addresses_deposit_create(
  payload
) {
  return circleAPI.post(
    `/v1/businessAccount/wallets/addresses/deposit`,
    payload.data
  )
}
export const apiService = {
  circleapi_get_v1_businessAccount_wallets_addresses_deposit_read,
  circleapi_post_v1_businessAccount_wallets_addresses_deposit_create
}
