import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const wordpressapi_post_rest_v11_sites_dummy15wordpresscom_tags_new_create = createAsyncThunk(
  "wordpressapi_response_post_CreateTags/wordpressapi_post_rest_v11_sites_dummy15wordpresscom_tags_new_create",
  async payload => {
    const response = await apiService.wordpressapi_post_rest_v11_sites_dummy15wordpresscom_tags_new_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const wordpressapi_response_post_CreateTagsSlice = createSlice({
  name: "wordpressapi_response_post_CreateTags",
  initialState,
  reducers: {},
  extraReducers: {
    [wordpressapi_post_rest_v11_sites_dummy15wordpresscom_tags_new_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [wordpressapi_post_rest_v11_sites_dummy15wordpresscom_tags_new_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [wordpressapi_post_rest_v11_sites_dummy15wordpresscom_tags_new_create.rejected]: (
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
  wordpressapi_post_rest_v11_sites_dummy15wordpresscom_tags_new_create,
  slice: wordpressapi_response_post_CreateTagsSlice
}
