import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const twiliovideochat_get_v1_Rooms_read = createAsyncThunk("twiliovideochat_response_get_Listrooms/twiliovideochat_get_v1_Rooms_read", async payload => {
  const response = await apiService.twiliovideochat_get_v1_Rooms_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const twiliovideochat_response_get_ListroomsSlice = createSlice({
  name: "twiliovideochat_response_get_Listrooms",
  initialState,
  reducers: {},
  extraReducers: {
    [twiliovideochat_get_v1_Rooms_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [twiliovideochat_get_v1_Rooms_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [twiliovideochat_get_v1_Rooms_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  twiliovideochat_get_v1_Rooms_read,
  slice: twiliovideochat_response_get_ListroomsSlice
};