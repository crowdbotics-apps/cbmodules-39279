import axios from "axios";
import { GAME_STATS_APIS_NAME } from "react-native-dotenv";
const gameStatsAPI = axios.create({
  baseURL: "https://api.sportsdata.io/v3/mlb",
  params: {
    key: GAME_STATS_APIS_NAME
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function gamestatsapi_get_scores_json_News_list(payload) {
  return gameStatsAPI.get(`/scores/json/News`);
}

function gamestatsapi_get_scores_json_Games_list(payload) {
  return gameStatsAPI.get(`/scores/json/Games/`);
}

function gamestatsapi_get_scores_json_GamesByDate_list(payload) {
  return gameStatsAPI.get(`/scores/json/GamesByDate/`);
}

export const apiService = {
  gamestatsapi_get_scores_json_News_list,
  gamestatsapi_get_scores_json_Games_list,
  gamestatsapi_get_scores_json_GamesByDate_list
};