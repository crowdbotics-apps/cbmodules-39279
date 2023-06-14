import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const couponapi_get_getFullFeed_read = createAsyncThunk("couponapi_response_get_GetFullFeeds/couponapi_get_getFullFeed_read", async payload => {
  const response = await apiService.couponapi_get_getFullFeed_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const couponapi_response_get_GetFullFeedsSlice = createSlice({
  name: "couponapi_response_get_GetFullFeeds",
  initialState,
  reducers: {},
  extraReducers: {
    [couponapi_get_getFullFeed_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [couponapi_get_getFullFeed_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [couponapi_get_getFullFeed_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  couponapi_get_getFullFeed_read,
  slice: couponapi_response_get_GetFullFeedsSlice
};