import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const gamestatsapi_get_scores_json_GamesByDate_list = createAsyncThunk(
  "gamestatsapi_response_get_GetGamesByDates/gamestatsapi_get_scores_json_GamesByDate_list",
  async payload => {
    const response = await apiService.gamestatsapi_get_scores_json_GamesByDate_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const gamestatsapi_response_get_GetGamesByDatesSlice = createSlice({
  name: "gamestatsapi_response_get_GetGamesByDates",
  initialState,
  reducers: {},
  extraReducers: {
    [gamestatsapi_get_scores_json_GamesByDate_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [gamestatsapi_get_scores_json_GamesByDate_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [gamestatsapi_get_scores_json_GamesByDate_list.rejected]: (
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
  gamestatsapi_get_scores_json_GamesByDate_list,
  slice: gamestatsapi_response_get_GetGamesByDatesSlice
}
