import axios from "axios"
const couponAPI = axios.create({
  baseURL: "https://couponapi.org/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function couponapi_get_getFullFeed_read(payload) {
  return couponAPI.get(`/getFullFeed/`, {
    params: {
      API_KEY: payload.API_KEY,
      callback: payload.callback,
      format: payload.format,
      off_record: payload.off_record
    }
  })
}
function couponapi_get_getIncrementalFeed_read(payload) {
  return couponAPI.get(`/getIncrementalFeed/`, {
    params: {
      API_KEY: payload.API_KEY,
      incremental: payload.incremental,
      last_extract: payload.last_extract,
      format: payload.format
    }
  })
}
export const apiService = {
  couponapi_get_getFullFeed_read,
  couponapi_get_getIncrementalFeed_read
}
