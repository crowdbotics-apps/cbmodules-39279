import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const oddsbettingapi_get_sports_americanfootball_nfl_oddshistory_read = createAsyncThunk("oddsbettingapi_response_get_GetHistoryOdds/oddsbettingapi_get_sports_americanfootball_nfl_oddshistory_read", async payload => {
  const response = await apiService.oddsbettingapi_get_sports_americanfootball_nfl_oddshistory_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const oddsbettingapi_response_get_GetHistoryOddsSlice = createSlice({
  name: "oddsbettingapi_response_get_GetHistoryOdds",
  initialState,
  reducers: {},
  extraReducers: {
    [oddsbettingapi_get_sports_americanfootball_nfl_oddshistory_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [oddsbettingapi_get_sports_americanfootball_nfl_oddshistory_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [oddsbettingapi_get_sports_americanfootball_nfl_oddshistory_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  oddsbettingapi_get_sports_americanfootball_nfl_oddshistory_read,
  slice: oddsbettingapi_response_get_GetHistoryOddsSlice
};