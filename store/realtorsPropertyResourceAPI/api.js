import axios from "axios"
const realtorsPropertyResourceAPI = axios.create({
  baseURL: "https://mystoreapi.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function realtorspropertyresourceapi_get_products_list(payload) {
  return realtorsPropertyResourceAPI.get(`products`, {
    params: { limit: payload.limit }
  })
}
function realtorspropertyresourceapi_get_catalog_categories_list(payload) {
  return realtorsPropertyResourceAPI.get(`catalog/categories`)
}
function realtorspropertyresourceapi_get_catalog_product_id_read(payload) {
  return realtorsPropertyResourceAPI.get(`catalog/product/id`)
}
export const apiService = {
  realtorspropertyresourceapi_get_products_list,
  realtorspropertyresourceapi_get_catalog_categories_list,
  realtorspropertyresourceapi_get_catalog_product_id_read
}
