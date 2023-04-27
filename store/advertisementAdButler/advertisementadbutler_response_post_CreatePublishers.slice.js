import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const advertisementadbutler_post_publishers_create = createAsyncThunk(
  "advertisementadbutler_response_post_CreatePublishers/advertisementadbutler_post_publishers_create",
  async payload => {
    const response = await apiService.advertisementadbutler_post_publishers_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const advertisementadbutler_response_post_CreatePublishersSlice = createSlice({
  name: "advertisementadbutler_response_post_CreatePublishers",
  initialState,
  reducers: {},
  extraReducers: {
    [advertisementadbutler_post_publishers_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [advertisementadbutler_post_publishers_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [advertisementadbutler_post_publishers_create.rejected]: (
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
  advertisementadbutler_post_publishers_create,
  slice: advertisementadbutler_response_post_CreatePublishersSlice
}
