import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const microblink_post_recognizers_blinkidcombined_create = createAsyncThunk(
  "microblink_response_post_BlinkIdCombinedrecognitions/microblink_post_recognizers_blinkidcombined_create",
  async payload => {
    const response = await apiService.microblink_post_recognizers_blinkidcombined_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const microblink_response_post_BlinkIdCombinedrecognitionsSlice = createSlice({
  name: "microblink_response_post_BlinkIdCombinedrecognitions",
  initialState,
  reducers: {},
  extraReducers: {
    [microblink_post_recognizers_blinkidcombined_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [microblink_post_recognizers_blinkidcombined_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [microblink_post_recognizers_blinkidcombined_create.rejected]: (
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
  microblink_post_recognizers_blinkidcombined_create,
  slice: microblink_response_post_BlinkIdCombinedrecognitionsSlice
}