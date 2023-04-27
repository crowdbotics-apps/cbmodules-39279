import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const gamestatsapi_get_scores_json_News_list = createAsyncThunk(
  "gamestatsapi_response_get_GetNews/gamestatsapi_get_scores_json_News_list",
  async payload => {
    const response = await apiService.gamestatsapi_get_scores_json_News_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const gamestatsapi_response_get_GetNewsSlice = createSlice({
  name: "gamestatsapi_response_get_GetNews",
  initialState,
  reducers: {},
  extraReducers: {
    [gamestatsapi_get_scores_json_News_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [gamestatsapi_get_scores_json_News_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [gamestatsapi_get_scores_json_News_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  gamestatsapi_get_scores_json_News_list,
  slice: gamestatsapi_response_get_GetNewsSlice
}
