import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const oddsbettingapi_get_scores_list = createAsyncThunk(
  "oddsbettingapi_response_get_GetScores/oddsbettingapi_get_scores_list",
  async payload => {
    const response = await apiService.oddsbettingapi_get_scores_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const oddsbettingapi_response_get_GetScoresSlice = createSlice({
  name: "oddsbettingapi_response_get_GetScores",
  initialState,
  reducers: {},
  extraReducers: {
    [oddsbettingapi_get_scores_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [oddsbettingapi_get_scores_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [oddsbettingapi_get_scores_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  oddsbettingapi_get_scores_list,
  slice: oddsbettingapi_response_get_GetScoresSlice
}
