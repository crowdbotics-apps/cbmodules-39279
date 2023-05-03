import axios from "axios"
import { HUBSPOT_API_PLUGIN_TOKEN } from "react-native-dotenv"
const hubSpotAPI = axios.create({
  baseURL: "https://api.hubapi.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${HUBSPOT_API_PLUGIN_TOKEN}`
  }
})
function hubspotapi_get_crm_v3_objects_companies_list(payload) {
  return hubSpotAPI.get(`crm/v3/objects/companies`)
}
function hubspotapi_get_crm_v3_objects_contacts_list(payload) {
  return hubSpotAPI.get(`crm/v3/objects/contacts/`)
}
export const apiService = {
  hubspotapi_get_crm_v3_objects_companies_list,
  hubspotapi_get_crm_v3_objects_contacts_list
}
