import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const ncaaintegration_get_nfl_scores_json_Byes_list = createAsyncThunk("ncaaintegration_response_get_ByeWeekForSportsTeams/ncaaintegration_get_nfl_scores_json_Byes_list", async payload => {
  const response = await apiService.ncaaintegration_get_nfl_scores_json_Byes_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const ncaaintegration_response_get_ByeWeekForSportsTeamsSlice = createSlice({
  name: "ncaaintegration_response_get_ByeWeekForSportsTeams",
  initialState,
  reducers: {},
  extraReducers: {
    [ncaaintegration_get_nfl_scores_json_Byes_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [ncaaintegration_get_nfl_scores_json_Byes_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [ncaaintegration_get_nfl_scores_json_Byes_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  ncaaintegration_get_nfl_scores_json_Byes_list,
  slice: ncaaintegration_response_get_ByeWeekForSportsTeamsSlice
};