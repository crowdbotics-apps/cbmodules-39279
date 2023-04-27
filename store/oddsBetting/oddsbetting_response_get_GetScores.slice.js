import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const oddsbetting_get_scores_list = createAsyncThunk(
  "oddsbetting_response_get_GetScores/oddsbetting_get_scores_list",
  async payload => {
    const response = await apiService.oddsbetting_get_scores_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const oddsbetting_response_get_GetScoresSlice = createSlice({
  name: "oddsbetting_response_get_GetScores",
  initialState,
  reducers: {},
  extraReducers: {
    [oddsbetting_get_scores_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [oddsbetting_get_scores_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [oddsbetting_get_scores_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  oddsbetting_get_scores_list,
  slice: oddsbetting_response_get_GetScoresSlice
}
