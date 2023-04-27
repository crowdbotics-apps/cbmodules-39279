import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const oddsbettingapi_get_sports_read = createAsyncThunk(
  "oddsbettingapi_response_get_GetSports/oddsbettingapi_get_sports_read",
  async payload => {
    const response = await apiService.oddsbettingapi_get_sports_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const oddsbettingapi_response_get_GetSportsSlice = createSlice({
  name: "oddsbettingapi_response_get_GetSports",
  initialState,
  reducers: {},
  extraReducers: {
    [oddsbettingapi_get_sports_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [oddsbettingapi_get_sports_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [oddsbettingapi_get_sports_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  oddsbettingapi_get_sports_read,
  slice: oddsbettingapi_response_get_GetSportsSlice
}
