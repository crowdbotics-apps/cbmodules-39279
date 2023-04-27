import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const ncaaintegration_get_nfl_projections_json_FantasyDefenseProjectionsBySeason_list = createAsyncThunk(
  "ncaaintegration_response_get_ProjectionsPointsFeeds/ncaaintegration_get_nfl_projections_json_FantasyDefenseProjectionsBySeason_list",
  async payload => {
    const response = await apiService.ncaaintegration_get_nfl_projections_json_FantasyDefenseProjectionsBySeason_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const ncaaintegration_response_get_ProjectionsPointsFeedsSlice = createSlice({
  name: "ncaaintegration_response_get_ProjectionsPointsFeeds",
  initialState,
  reducers: {},
  extraReducers: {
    [ncaaintegration_get_nfl_projections_json_FantasyDefenseProjectionsBySeason_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [ncaaintegration_get_nfl_projections_json_FantasyDefenseProjectionsBySeason_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [ncaaintegration_get_nfl_projections_json_FantasyDefenseProjectionsBySeason_list.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  ncaaintegration_get_nfl_projections_json_FantasyDefenseProjectionsBySeason_list,
  slice: ncaaintegration_response_get_ProjectionsPointsFeedsSlice
}
