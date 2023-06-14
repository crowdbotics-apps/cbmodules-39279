import axios from "axios";
const vehicleHistoryAndConditionReport = axios.create({
  baseURL: "http://api.carsxe.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function vehiclehistoryandconditionreport_get_specs_read(payload) {
  return vehicleHistoryAndConditionReport.get(`/specs`, {
    params: {
      key: payload.key,
      vin: payload.vin
    }
  });
}

function vehiclehistoryandconditionreport_get_history_read(payload) {
  return vehicleHistoryAndConditionReport.get(`/history`, {
    params: {
      key: payload.key,
      vin: payload.vin
    }
  });
}

function vehiclehistoryandconditionreport_get_marketvalue_read(payload) {
  return vehicleHistoryAndConditionReport.get(`/marketvalue`, {
    params: {
      key: payload.key,
      vin: payload.vin,
      format: payload.format
    }
  });
}

export const apiService = {
  vehiclehistoryandconditionreport_get_specs_read,
  vehiclehistoryandconditionreport_get_history_read,
  vehiclehistoryandconditionreport_get_marketvalue_read
};