import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const osiaffiliateapi_post_add_user_api_key_create = createAsyncThunk(
  "osiaffiliateapi_response_post_AddUsers/osiaffiliateapi_post_add_user_api_key_create",
  async payload => {
    const response = await apiService.osiaffiliateapi_post_add_user_api_key_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const osiaffiliateapi_response_post_AddUsersSlice = createSlice({
  name: "osiaffiliateapi_response_post_AddUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [osiaffiliateapi_post_add_user_api_key_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [osiaffiliateapi_post_add_user_api_key_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [osiaffiliateapi_post_add_user_api_key_create.rejected]: (
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
  osiaffiliateapi_post_add_user_api_key_create,
  slice: osiaffiliateapi_response_post_AddUsersSlice
}
