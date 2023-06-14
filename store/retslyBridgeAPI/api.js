import axios from "axios";
const retslyBridgeAPI = axios.create({
  baseURL: "https://api.bridgedataoutput.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function retslybridgeapi_get_api_v2_test_agents_list(payload) {
  return retslyBridgeAPI.get(`/api/v2/test/agents`, {
    params: {
      access_token: payload.access_token
    }
  });
}

function retslybridgeapi_get_api_v2_test_listings_list(payload) {
  return retslyBridgeAPI.get(`/api/v2/test/listings`, {
    params: {
      access_token: payload.access_token
    }
  });
}

export const apiService = {
  retslybridgeapi_get_api_v2_test_agents_list,
  retslybridgeapi_get_api_v2_test_listings_list
};