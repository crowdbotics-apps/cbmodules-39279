import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const ubereatintegration_get_eats_stores_read = createAsyncThunk("ubereatintegration_response_get_GetStoreDetails/ubereatintegration_get_eats_stores_read", async payload => {
  const response = await apiService.ubereatintegration_get_eats_stores_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const ubereatintegration_response_get_GetStoreDetailsSlice = createSlice({
  name: "ubereatintegration_response_get_GetStoreDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [ubereatintegration_get_eats_stores_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [ubereatintegration_get_eats_stores_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [ubereatintegration_get_eats_stores_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  ubereatintegration_get_eats_stores_read,
  slice: ubereatintegration_response_get_GetStoreDetailsSlice
};