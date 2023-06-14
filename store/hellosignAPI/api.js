import axios from "axios"
const hellosignAPI = axios.create({
  baseURL: "https://www.crowdbotics.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function hellosignapi_post_webhook_create(payload) {
  return hellosignAPI.post(`webhook`)
}
export const apiService = { hellosignapi_post_webhook_create }
