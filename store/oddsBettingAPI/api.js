import axios from "axios";
const oddsBettingAPI = axios.create({
  baseURL: "https://api.the-odds-api.com/v4",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function oddsbettingapi_get_scores_list(payload) {
  return oddsBettingAPI.get(`/scores/`, {
    params: {
      daysFrom: payload.daysFrom,
      apiKey: payload.apiKey
    }
  });
}

function oddsbettingapi_get_sports_read(payload) {
  return oddsBettingAPI.get(`/sports/`, {
    params: {
      apiKey: payload.apiKey
    }
  });
}

function oddsbettingapi_get_sports_americanfootball_nfl_oddshistory_read(payload) {
  return oddsBettingAPI.get(`/sports/americanfootball_nfl/odds-history/`, {
    params: {
      apiKey: payload.apiKey,
      regions: payload.regions,
      markets: payload.markets,
      oddsFormat: payload.oddsFormat,
      date: payload.date
    }
  });
}

export const apiService = {
  oddsbettingapi_get_scores_list,
  oddsbettingapi_get_sports_read,
  oddsbettingapi_get_sports_americanfootball_nfl_oddshistory_read
};