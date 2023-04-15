import axios from "axios"
import { HUBSPOT_API_SUPPORT_TOKEN } from "react-native-dotenv"
const hubSpotAPISupport = axios.create({
  baseURL: "https://api.hubapi.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${HUBSPOT_API_SUPPORT_TOKEN}`
  }
})
function hubspotapisupport_get_crm_v3_objects_contacts_list(payload) {
  return hubSpotAPISupport.get(`crm/v3/objects/contacts/`)
}
export const apiService = { hubspotapisupport_get_crm_v3_objects_contacts_list }
