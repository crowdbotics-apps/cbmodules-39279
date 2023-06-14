import axios from "axios"
const bestBuyAPI = axios.create({
  baseURL: "https://api.bestbuy.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function bestbuyapi_get_v1_products_list(payload) {
  return bestBuyAPI.get(`/v1/products`, {
    params: { format: payload.format, apiKey: payload.apiKey }
  })
}
function bestbuyapi_get_v1_products_pid_warrantiesjson_list(payload) {
  return bestBuyAPI.get(`/v1/products/pid/warranties.json`, {
    params: { apiKey: payload.apiKey }
  })
}
export const apiService = {
  bestbuyapi_get_v1_products_list,
  bestbuyapi_get_v1_products_pid_warrantiesjson_list
}
