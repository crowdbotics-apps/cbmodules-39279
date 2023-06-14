import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const integrationofdropbox_get_file_requests_count_read = createAsyncThunk("integrationofdropbox_response_get_FilesCounts/integrationofdropbox_get_file_requests_count_read", async payload => {
  const response = await apiService.integrationofdropbox_get_file_requests_count_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const integrationofdropbox_response_get_FilesCountsSlice = createSlice({
  name: "integrationofdropbox_response_get_FilesCounts",
  initialState,
  reducers: {},
  extraReducers: {
    [integrationofdropbox_get_file_requests_count_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [integrationofdropbox_get_file_requests_count_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [integrationofdropbox_get_file_requests_count_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  integrationofdropbox_get_file_requests_count_read,
  slice: integrationofdropbox_response_get_FilesCountsSlice
};