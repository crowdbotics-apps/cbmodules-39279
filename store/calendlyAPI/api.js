import axios from "axios";
import "react-native-dotenv";
const calendlyAPI = axios.create({
  baseURL: "https://api.calendly.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjcwOTIyNzkyLCJqdGkiOiI5OTRhMWNiYi01NGI2LTQwMGMtYTZmYy0xYzZiMWFkNzY4OGQiLCJ1c2VyX3V1aWQiOiIzZTFjMTRkZS0wMWM5LTRlYTgtYTg3Yi1mYWYyYjg1OGI1ODAifQ.zSXOUhvWKm2dNnn4ZNtV1L8K_jWPkJuCysHbMySr_QNN-6wLQpmWGffJyyYzPk0wNed4kt8QKkOSuNkJEoO6AQ"
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