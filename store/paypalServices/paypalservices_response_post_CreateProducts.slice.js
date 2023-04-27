import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const paypalservices_post_v1_catalogs_products_create = createAsyncThunk("paypalservices_response_post_CreateProducts/paypalservices_post_v1_catalogs_products_create", async payload => {
  const response = await apiService.paypalservices_post_v1_catalogs_products_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const paypalservices_response_post_CreateProductsSlice = createSlice({
  name: "paypalservices_response_post_CreateProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [paypalservices_post_v1_catalogs_products_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [paypalservices_post_v1_catalogs_products_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [paypalservices_post_v1_catalogs_products_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  paypalservices_post_v1_catalogs_products_create,
  slice: paypalservices_response_post_CreateProductsSlice
};