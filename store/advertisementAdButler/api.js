import axios from "axios";
import { ADVERTISEMENT_ADBUTLER_PLUGIN_TOKEN } from "react-native-dotenv";
const advertisementAdButler = axios.create({
  baseURL: "https://api.adbutler.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${ADVERTISEMENT_ADBUTLER_PLUGIN_TOKEN}`
  }
});

function advertisementadbutler_post_publishers_create(payload) {
  return advertisementAdButler.post(`/publishers`, payload.data);
}

function advertisementadbutler_get_publishers_publisherid_read(payload) {
  return advertisementAdButler.get(`/publishers/${payload.publisher - id}`);
}

function advertisementadbutler_delete_publishers_publisherid_delete(payload) {
  return advertisementAdButler.delete(`/publishers/${payload.publisher - id}`);
}

export const apiService = {
  advertisementadbutler_post_publishers_create,
  advertisementadbutler_get_publishers_publisherid_read,
  advertisementadbutler_delete_publishers_publisherid_delete
};