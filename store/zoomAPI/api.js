import axios from "axios";
import { ZOOM_APIS_SERVICES_TOKEN } from "@env";
const zoomAPI = axios.create({
  baseURL: "https://api.zoom.us/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${ZOOM_APIS_SERVICES_TOKEN}`
  }
});

function zoomapi_get_users_list(payload) {
  return zoomAPI.get(`/users/`);
}

function zoomapi_get_users_user_Id_meetings_list(payload) {
  return zoomAPI.get(`/users/${payload.user_Id}/meetings`);
}

export const apiService = {
  zoomapi_get_users_list,
  zoomapi_get_users_user_Id_meetings_list
};