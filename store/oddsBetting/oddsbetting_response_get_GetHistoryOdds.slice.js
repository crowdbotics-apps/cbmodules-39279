import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const oddsbetting_get_sports_americanfootball_nfl_oddshistory_read = createAsyncThunk("oddsbetting_response_get_GetHistoryOdds/oddsbetting_get_sports_americanfootball_nfl_oddshistory_read", async payload => {
  const response = await apiService.oddsbetting_get_sports_americanfootball_nfl_oddshistory_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const oddsbetting_response_get_GetHistoryOddsSlice = createSlice({
  name: "oddsbetting_response_get_GetHistoryOdds",
  initialState,
  reducers: {},
  extraReducers: {
    [oddsbetting_get_sports_americanfootball_nfl_oddshistory_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [oddsbetting_get_sports_americanfootball_nfl_oddshistory_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [oddsbetting_get_sports_americanfootball_nfl_oddshistory_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  oddsbetting_get_sports_americanfootball_nfl_oddshistory_read,
  slice: oddsbetting_response_get_GetHistoryOddsSlice
};