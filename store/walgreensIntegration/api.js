import axios from "axios"
const walgreensIntegration = axios.create({
  baseURL: "https://services-qa.walgreens.com/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function walgreensintegration_post_util_mweb5url_create(payload) {
  return walgreensIntegration.post(`/util/mweb5url`, payload.data)
}
function walgreensintegration_post_photo_creds_v3_create(payload) {
  return walgreensIntegration.post(`/photo/creds/v3`, payload.data)
}
export const apiService = {
  walgreensintegration_post_util_mweb5url_create,
  walgreensintegration_post_photo_creds_v3_create
}
