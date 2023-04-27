import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const zoomapi_get_users_list = createAsyncThunk("zoomapi_response_get_GetUserDetails/zoomapi_get_users_list", async payload => {
  const response = await apiService.zoomapi_get_users_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const zoomapi_response_get_GetUserDetailsSlice = createSlice({
  name: "zoomapi_response_get_GetUserDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [zoomapi_get_users_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [zoomapi_get_users_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [zoomapi_get_users_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  zoomapi_get_users_list,
  slice: zoomapi_response_get_GetUserDetailsSlice
};