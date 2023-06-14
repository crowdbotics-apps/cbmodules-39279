import axios from "axios"
import { AMADEUS_INTEGRATION_TOKEN } from "react-native-dotenv"
const amadeusIntegration = axios.create({
  baseURL: "https://test.api.amadeus.com/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${AMADEUS_INTEGRATION_TOKEN}`
  }
})
function amadeusintegration_get_shopping_flightoffers_read(payload) {
  return amadeusIntegration.get(`/shopping/flight-offers`, {
    params: {
      originLocationCode: payload.originLocationCode,
      destinationLocationCode: payload.destinationLocationCode,
      departureDate: payload.departureDate,
      returnDate: payload.returnDate,
      adults: payload.adults,
      max: payload.max
    }
  })
}
function amadeusintegration_get_airport_directdestinations_list(payload) {
  return amadeusIntegration.get(`/airport/direct-destinations`, {
    params: {
      departureAirportCode: payload.departureAirportCode,
      max: payload.max
    }
  })
}
function amadeusintegration_get_travel_predictions_flightdelay_list(payload) {
  return amadeusIntegration.get(`/travel/predictions/flight-delay`, {
    params: {
      originLocationCode: payload.originLocationCode,
      destinationLocationCode: payload.destinationLocationCode,
      departureDate: payload.departureDate,
      departureTime: payload.departureTime,
      arrivalDate: payload.arrivalDate,
      arrivalTime: payload.arrivalTime,
      aircraftCode: payload.aircraftCode,
      flightNumber: payload.flightNumber,
      duration: payload.duration
    }
  })
}
export const apiService = {
  amadeusintegration_get_shopping_flightoffers_read,
  amadeusintegration_get_airport_directdestinations_list,
  amadeusintegration_get_travel_predictions_flightdelay_list
}
