import axios from "axios"
import {} from "react-native-dotenv"
const stripePaymentAPI = axios.create({
  baseURL: "https://api.stripe.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function stripepaymentapi_get_v1_balance_list(payload) {
  return stripePaymentAPI.get(`/v1/balance`)
}
function stripepaymentapi_post_v1_payment_intents_create(payload) {
  return stripePaymentAPI.post(`/v1/payment_intents`, payload.data)
}
export const apiService = {
  stripepaymentapi_get_v1_balance_list,
  stripepaymentapi_post_v1_payment_intents_create
}