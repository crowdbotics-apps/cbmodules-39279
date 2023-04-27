import axios from "axios";
import { NCA_KEY } from "@env";
const nCAAIntegration = axios.create({
  baseURL: "https://api.sportsdata.io/v3",
  params: {
    key: NCA_KEY
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function ncaaintegration_get_nfl_scores_json_Byes_list(payload) {
  return nCAAIntegration.get(`/nfl/scores/json/Byes/`);
}

function ncaaintegration_get_nfl_odds_json_BettingMetadata_read(payload) {
  return nCAAIntegration.get(`/nfl/odds/json/BettingMetadata`);
}

function ncaaintegration_get_nfl_projections_json_FantasyDefenseProjectionsBySeason_list(payload) {
  return nCAAIntegration.get(`/nfl/projections/json/FantasyDefenseProjectionsBySeason/`);
}

export const apiService = {
  ncaaintegration_get_nfl_scores_json_Byes_list,
  ncaaintegration_get_nfl_odds_json_BettingMetadata_read,
  ncaaintegration_get_nfl_projections_json_FantasyDefenseProjectionsBySeason_list
};