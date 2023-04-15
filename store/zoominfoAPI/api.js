import axios from "axios"
import { ZOOMINFO_API_TOKEN } from "react-native-dotenv"
const zoominfoAPI = axios.create({
  baseURL: "https://api.zoominfo.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${ZOOMINFO_API_TOKEN}`
  }
})
function zoominfoapi_get_lookup_inputfields_company_enrich_list(payload) {
  return zoominfoAPI.get(`/lookup/inputfields/company/enrich`)
}
function zoominfoapi_get_lookup_inputfields_contact_search_list(payload) {
  return zoominfoAPI.get(`/lookup/inputfields/contact/search`)
}
export const apiService = {
  zoominfoapi_get_lookup_inputfields_company_enrich_list,
  zoominfoapi_get_lookup_inputfields_contact_search_list
}
