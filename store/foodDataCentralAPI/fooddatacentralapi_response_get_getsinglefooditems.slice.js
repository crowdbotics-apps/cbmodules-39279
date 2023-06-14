import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const fooddatacentralapi_get_v1_foods_list = createAsyncThunk("fooddatacentralapi_response_get_getsinglefooditems/fooddatacentralapi_get_v1_foods_list", async payload => {
  const response = await apiService.fooddatacentralapi_get_v1_foods_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const fooddatacentralapi_response_get_getsinglefooditemsSlice = createSlice({
  name: "fooddatacentralapi_response_get_getsinglefooditems",
  initialState,
  reducers: {},
  extraReducers: {
    [fooddatacentralapi_get_v1_foods_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [fooddatacentralapi_get_v1_foods_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [fooddatacentralapi_get_v1_foods_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  fooddatacentralapi_get_v1_foods_list,
  slice: fooddatacentralapi_response_get_getsinglefooditemsSlice
};