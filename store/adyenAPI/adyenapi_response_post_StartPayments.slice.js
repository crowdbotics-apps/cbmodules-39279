import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const adyenapi_post_payments_create = createAsyncThunk("adyenapi_response_post_StartPayments/adyenapi_post_payments_create", async payload => {
  const response = await apiService.adyenapi_post_payments_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const adyenapi_response_post_StartPaymentsSlice = createSlice({
  name: "adyenapi_response_post_StartPayments",
  initialState,
  reducers: {},
  extraReducers: {
    [adyenapi_post_payments_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [adyenapi_post_payments_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [adyenapi_post_payments_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  adyenapi_post_payments_create,
  slice: adyenapi_response_post_StartPaymentsSlice
};