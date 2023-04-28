import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const walgreensintegration_post_util_mweb5url_create = createAsyncThunk(
  "walgreensintegration_response_post_ObtainRefills/walgreensintegration_post_util_mweb5url_create",
  async payload => {
    const response = await apiService.walgreensintegration_post_util_mweb5url_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const walgreensintegration_response_post_ObtainRefillsSlice = createSlice({
  name: "walgreensintegration_response_post_ObtainRefills",
  initialState,
  reducers: {},
  extraReducers: {
    [walgreensintegration_post_util_mweb5url_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [walgreensintegration_post_util_mweb5url_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [walgreensintegration_post_util_mweb5url_create.rejected]: (
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
  walgreensintegration_post_util_mweb5url_create,
  slice: walgreensintegration_response_post_ObtainRefillsSlice
}