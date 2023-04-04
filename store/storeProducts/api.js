import axios from "axios"
const storeProducts = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function storeproducts_get_products_list(payload) {
  return storeProducts.get(`/products`)
}
export const apiService = { storeproducts_get_products_list }
