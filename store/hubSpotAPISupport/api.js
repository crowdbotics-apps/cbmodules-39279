import axios from "axios"
import {} from "react-native-dotenv"
const hubSpotAPISupport = axios.create({
  baseURL: "https://api.hubapi.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function hubspotapisupport_get_crm_v3_objects_companies_list(payload) {
  return hubSpotAPISupport.get(`crm/v3/objects/companies`)
}
function hubspotapisupport_get_crm_v3_objects_contacts_list(payload) {
  return hubSpotAPISupport.get(`crm/v3/objects/contacts/`)
}
export const apiService = {
  hubspotapisupport_get_crm_v3_objects_companies_list,
  hubspotapisupport_get_crm_v3_objects_contacts_list
}
