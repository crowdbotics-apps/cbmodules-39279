import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const calendlyapi_get_users_me_read = createAsyncThunk("calendlyapi_response_get_GetCalendlyUsers/calendlyapi_get_users_me_read", async payload => {
  const response = await apiService.calendlyapi_get_users_me_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const calendlyapi_response_get_GetCalendlyUsersSlice = createSlice({
  name: "calendlyapi_response_get_GetCalendlyUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [calendlyapi_get_users_me_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [calendlyapi_get_users_me_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [calendlyapi_get_users_me_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  calendlyapi_get_users_me_read,
  slice: calendlyapi_response_get_GetCalendlyUsersSlice
};