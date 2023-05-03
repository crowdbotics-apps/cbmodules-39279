import axios from "axios"
const foodDataCentralAPI = axios.create({
  baseURL: "https://api.nal.usda.gov/fdc",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function fooddatacentralapi_get_v1_foods_list(payload) {
  return foodDataCentralAPI.get(`/v1/foods`, {
    params: { fdcIds: payload.fdcIds, api_key: payload.api_key }
  })
}
function fooddatacentralapi_get_v1_foods_list_list(payload) {
  return foodDataCentralAPI.get(`/v1/foods/list`, {
    params: { pageSize: payload.pageSize, api_key: payload.api_key }
  })
}
export const apiService = {
  fooddatacentralapi_get_v1_foods_list,
  fooddatacentralapi_get_v1_foods_list_list
}
