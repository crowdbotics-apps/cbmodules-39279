import axios from "axios"
const mapBoxWebAPIs = axios.create({
  baseURL: "https://api.mapbox.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function mapboxwebapis_get_styles_v1_user_style_id_list(payload) {
  return mapBoxWebAPIs.get(`/styles/v1/user/style_id`, {
    params: { access_token: payload.access_token }
  })
}
function mapboxwebapis_get_directions_v5_mapbox_profile_origin_latorigin_lngdest_latdest_lngjson_list(
  payload
) {
  return mapBoxWebAPIs.get(
    `/directions/v5/mapbox/profile/origin_lat,origin_lng:dest_lat,dest_lng.json`,
    { params: { access_token: payload.access_token } }
  )
}
export const apiService = {
  mapboxwebapis_get_styles_v1_user_style_id_list,
  mapboxwebapis_get_directions_v5_mapbox_profile_origin_latorigin_lngdest_latdest_lngjson_list
}
