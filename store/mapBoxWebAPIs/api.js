import axios from "axios"
const mapBoxWebAPIs = axios.create({
  baseURL: "https://api.mapbox.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function mapboxwebapis_get_styles_v1_user_style_id_list(payload) {
  return mapBoxWebAPIs.get(`/styles/v1/user/style_id`)
}
export const apiService = { mapboxwebapis_get_styles_v1_user_style_id_list }
