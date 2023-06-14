import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const vehiclehistoryandconditionreport_get_history_read = createAsyncThunk("vehiclehistoryandconditionreport_response_get_VehicleHistories/vehiclehistoryandconditionreport_get_history_read", async payload => {
  const response = await apiService.vehiclehistoryandconditionreport_get_history_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const vehiclehistoryandconditionreport_response_get_VehicleHistoriesSlice = createSlice({
  name: "vehiclehistoryandconditionreport_response_get_VehicleHistories",
  initialState,
  reducers: {},
  extraReducers: {
    [vehiclehistoryandconditionreport_get_history_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [vehiclehistoryandconditionreport_get_history_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [vehiclehistoryandconditionreport_get_history_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  vehiclehistoryandconditionreport_get_history_read,
  slice: vehiclehistoryandconditionreport_response_get_VehicleHistoriesSlice
};