import axios from "axios";
const oddsBetting = axios.create({
  baseURL: "https://api.the-odds-api.com/v4",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function oddsbetting_get_scores_list(payload) {
  return oddsBetting.get(`/scores/`, {
    params: {
      daysFrom: payload.daysFrom,
      apiKey: payload.apiKey
    }
  });
}

function oddsbetting_get_sports_read(payload) {
  return oddsBetting.get(`/sports/`, {
    params: {
      apiKey: payload.apiKey
    }
  }).catch(err => console.log(err.response))
}

function oddsbetting_get_sports_americanfootball_nfl_oddshistory_read(payload) {
  return oddsBetting.get(`/sports/americanfootball_nfl/odds-history/`, {
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
  oddsbetting_get_scores_list,
  oddsbetting_get_sports_read,
  oddsbetting_get_sports_americanfootball_nfl_oddshistory_read
};