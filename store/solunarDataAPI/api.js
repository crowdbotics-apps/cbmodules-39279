import axios from "axios"
const solunarDataAPI = axios.create({
  baseURL: "https://api.solunar.org",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function solunardataapi_get_solunar_list(payload) {
  return solunarDataAPI.get(`solunar/`)
}
export const apiService = { solunardataapi_get_solunar_list }
