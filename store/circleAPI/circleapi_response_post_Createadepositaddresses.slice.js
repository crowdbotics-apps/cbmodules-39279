import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const circleapi_post_v1_businessAccount_wallets_addresses_deposit_create = createAsyncThunk("circleapi_response_post_Createadepositaddresses/circleapi_post_v1_businessAccount_wallets_addresses_deposit_create", async payload => {
  const response = await apiService.circleapi_post_v1_businessAccount_wallets_addresses_deposit_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const circleapi_response_post_CreateadepositaddressesSlice = createSlice({
  name: "circleapi_response_post_Createadepositaddresses",
  initialState,
  reducers: {},
  extraReducers: {
    [circleapi_post_v1_businessAccount_wallets_addresses_deposit_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [circleapi_post_v1_businessAccount_wallets_addresses_deposit_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [circleapi_post_v1_businessAccount_wallets_addresses_deposit_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  circleapi_post_v1_businessAccount_wallets_addresses_deposit_create,
  slice: circleapi_response_post_CreateadepositaddressesSlice
};