import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const advertisementadbutler_delete_publishers_publisherid_delete = createAsyncThunk(
  "advertisementadbutler_response_delete_DeletePublishers/advertisementadbutler_delete_publishers_publisherid_delete",
  async payload => {
    const response = await apiService.advertisementadbutler_delete_publishers_publisherid_delete(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const advertisementadbutler_response_delete_DeletePublishersSlice = createSlice(
  {
    name: "advertisementadbutler_response_delete_DeletePublishers",
    initialState,
    reducers: {},
    extraReducers: {
      [advertisementadbutler_delete_publishers_publisherid_delete.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [advertisementadbutler_delete_publishers_publisherid_delete.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      },
      [advertisementadbutler_delete_publishers_publisherid_delete.rejected]: (
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
  advertisementadbutler_delete_publishers_publisherid_delete,
  slice: advertisementadbutler_response_delete_DeletePublishersSlice
}
