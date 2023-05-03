import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const ncaaintegration_get_nfl_odds_json_BettingMetadata_read = createAsyncThunk(
  "ncaaintegration_response_get_GetBettingMetaData/ncaaintegration_get_nfl_odds_json_BettingMetadata_read",
  async payload => {
    const response = await apiService.ncaaintegration_get_nfl_odds_json_BettingMetadata_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const ncaaintegration_response_get_GetBettingMetaDataSlice = createSlice({
  name: "ncaaintegration_response_get_GetBettingMetaData",
  initialState,
  reducers: {},
  extraReducers: {
    [ncaaintegration_get_nfl_odds_json_BettingMetadata_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [ncaaintegration_get_nfl_odds_json_BettingMetadata_read.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [ncaaintegration_get_nfl_odds_json_BettingMetadata_read.rejected]: (
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
  ncaaintegration_get_nfl_odds_json_BettingMetadata_read,
  slice: ncaaintegration_response_get_GetBettingMetaDataSlice
}
