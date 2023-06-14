import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const osiaffiliateapi_post_list_users_api_key_create = createAsyncThunk(
  "osiaffiliateapi_response_post_ListUsers/osiaffiliateapi_post_list_users_api_key_create",
  async payload => {
    const response = await apiService.osiaffiliateapi_post_list_users_api_key_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const osiaffiliateapi_response_post_ListUsersSlice = createSlice({
  name: "osiaffiliateapi_response_post_ListUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [osiaffiliateapi_post_list_users_api_key_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [osiaffiliateapi_post_list_users_api_key_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [osiaffiliateapi_post_list_users_api_key_create.rejected]: (
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
  osiaffiliateapi_post_list_users_api_key_create,
  slice: osiaffiliateapi_response_post_ListUsersSlice
}
