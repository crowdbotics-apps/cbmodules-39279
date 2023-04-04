import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const storeproducts_get_products_list = createAsyncThunk("storeproducts_response_get_productlists/storeproducts_get_products_list", async payload => {
  const response = await apiService.storeproducts_get_products_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const storeproducts_response_get_productlistsSlice = createSlice({
  name: "storeproducts_response_get_productlists",
  initialState,
  reducers: {},
  extraReducers: {
    [storeproducts_get_products_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [storeproducts_get_products_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [storeproducts_get_products_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  storeproducts_get_products_list,
  slice: storeproducts_response_get_productlistsSlice
};