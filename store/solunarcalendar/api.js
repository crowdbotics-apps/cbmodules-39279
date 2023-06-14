import axios from "axios";
const solunarcalendar = axios.create({
  baseURL: "https://api.solunar.org",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function solunarcalendar_get_solunar_latitudelongitudedatetz_read(payload) {
  return solunarcalendar.get(`/solunar/latitude,longitude,date,tz`);
}

export const apiService = {
  solunarcalendar_get_solunar_latitudelongitudedatetz_read
};