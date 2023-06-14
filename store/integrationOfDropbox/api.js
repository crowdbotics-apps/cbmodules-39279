import axios from "axios";
import { API_INTEGRATION_OF_DROPBOX_TOKEN } from "react-native-dotenv";
const integrationOfDropbox = axios.create({
  baseURL: "https://api.dropboxapi.com/2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_INTEGRATION_OF_DROPBOX_TOKEN}`
  }
});

function integrationofdropbox_get_file_requests_count_read(payload) {
  return integrationOfDropbox.get(`/file_requests/count`);
}

function integrationofdropbox_post_file_properties_properties_search_create(payload) {
  return integrationOfDropbox.post(`/file_properties/properties/search`, payload.data);
}

export const apiService = {
  integrationofdropbox_get_file_requests_count_read,
  integrationofdropbox_post_file_properties_properties_search_create
};