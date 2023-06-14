import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const integrationofdropbox_post_file_properties_properties_search_create = createAsyncThunk(
  "integrationofdropbox_response_post_FilePropertiesSearches/integrationofdropbox_post_file_properties_properties_search_create",
  async payload => {
    const response = await apiService.integrationofdropbox_post_file_properties_properties_search_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const integrationofdropbox_response_post_FilePropertiesSearchesSlice = createSlice(
  {
    name: "integrationofdropbox_response_post_FilePropertiesSearches",
    initialState,
    reducers: {},
    extraReducers: {
      [integrationofdropbox_post_file_properties_properties_search_create.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [integrationofdropbox_post_file_properties_properties_search_create.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      },
      [integrationofdropbox_post_file_properties_properties_search_create.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      }
    }
  }
)
export default {
  integrationofdropbox_post_file_properties_properties_search_create,
  slice: integrationofdropbox_response_post_FilePropertiesSearchesSlice
}
