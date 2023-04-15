import axios from "axios"
const oSITracker = axios.create({
  baseURL: "http://newapi.omnistarhost.com/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function ositracker_post_list_users_create(payload) {
  return oSITracker.post(`/list_users`, payload.data)
}
export const apiService = { ositracker_post_list_users_create }
