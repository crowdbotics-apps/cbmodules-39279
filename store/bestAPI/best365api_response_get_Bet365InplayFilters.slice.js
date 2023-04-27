import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const best365api_get_inplay_filter_read = createAsyncThunk("best365api_response_get_Bet365InplayFilters/best365api_get_inplay_filter_read", async payload => {
  const response = await apiService.best365api_get_inplay_filter_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const best365api_response_get_Bet365InplayFiltersSlice = createSlice({
  name: "best365api_response_get_Bet365InplayFilters",
  initialState,
  reducers: {},
  extraReducers: {
    [best365api_get_inplay_filter_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [best365api_get_inplay_filter_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [best365api_get_inplay_filter_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  best365api_get_inplay_filter_read,
  slice: best365api_response_get_Bet365InplayFiltersSlice
};