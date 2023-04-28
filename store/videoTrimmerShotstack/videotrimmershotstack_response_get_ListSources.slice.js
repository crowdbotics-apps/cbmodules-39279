import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const videotrimmershotstack_get_sources_read = createAsyncThunk(
  "videotrimmershotstack_response_get_ListSources/videotrimmershotstack_get_sources_read",
  async payload => {
    const response = await apiService.videotrimmershotstack_get_sources_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const videotrimmershotstack_response_get_ListSourcesSlice = createSlice({
  name: "videotrimmershotstack_response_get_ListSources",
  initialState,
  reducers: {},
  extraReducers: {
    [videotrimmershotstack_get_sources_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [videotrimmershotstack_get_sources_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [videotrimmershotstack_get_sources_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  videotrimmershotstack_get_sources_read,
  slice: videotrimmershotstack_response_get_ListSourcesSlice
}
