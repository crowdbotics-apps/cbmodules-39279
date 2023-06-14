import axios from "axios";
const solunarAPI = axios.create({
  baseURL: "https://api.solunar.org/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function solunarapi_get_solunar_latitudelongitudedatetz_list(payload) {
  return solunarAPI.get(`solunar/latitude,longitude,date,tz`);
}

export const apiService = {
  solunarapi_get_solunar_latitudelongitudedatetz_list
};