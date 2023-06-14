import axios from "axios";
const tripAdvisorIntegration = axios.create({
  baseURL: "https://api.content.tripadvisor.com/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function tripadvisorintegration_get_location_search_read(payload) {
  return tripAdvisorIntegration.get(`/location/search`, {
    params: {
      key: payload.key,
      searchQuery: payload.searchQuery
    }
  });
}

function tripadvisorintegration_get_location_location_id_photos_read(payload) {
  return tripAdvisorIntegration.get(`/location/${payload.location_id}/photos`, {
    params: {
      key: payload.key
    }
  });
}

function tripadvisorintegration_get_location_location_id_details_read(payload) {
  return tripAdvisorIntegration.get(`/location/${payload.location_id}/details`, {
    params: {
      key: payload.key
    }
  });
}

function tripadvisorintegration_get_location_location_id_reviews_read(payload) {
  return tripAdvisorIntegration.get(`/location/${payload.location_id}/reviews`, {
    params: {
      key: payload.key
    }
  });
}

export const apiService = {
  tripadvisorintegration_get_location_search_read,
  tripadvisorintegration_get_location_location_id_photos_read,
  tripadvisorintegration_get_location_location_id_details_read,
  tripadvisorintegration_get_location_location_id_reviews_read
};