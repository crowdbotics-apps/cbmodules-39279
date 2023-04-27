import axios from "axios";
import "react-native-dotenv";
const calendlyAPI = axios.create({
  baseURL: "https://api.calendly.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function calendlyapi_get_users_me_read(payload) {
  return calendlyAPI.get(`users/me`);
}

function calendlyapi_get_scheduled_events_list(payload) {
  return calendlyAPI.get(`scheduled_events`);
}

export const apiService = {
  calendlyapi_get_users_me_read,
  calendlyapi_get_scheduled_events_list
};