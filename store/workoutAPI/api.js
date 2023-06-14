import axios from "axios";
import { WORKOUT_API_SUPPORT_TOKEN } from "react-native-dotenv";
const workoutAPI = axios.create({
  baseURL: "https://wger.de",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${WORKOUT_API_SUPPORT_TOKEN}`
  }
});

function workoutapi_get_api_v2_workout_list(payload) {
  return workoutAPI.get(`/api/v2/workout/`);
}

function workoutapi_get_api_v2_exercise_list(payload) {
  return workoutAPI.get(`/api/v2/exercise/`);
}

export const apiService = {
  workoutapi_get_api_v2_workout_list,
  workoutapi_get_api_v2_exercise_list
};