import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const advertisementadbutler_get_publishers_publisherid_read = createAsyncThunk(
  "advertisementadbutler_response_get_RetrievePublishers/advertisementadbutler_get_publishers_publisherid_read",
  async payload => {
    const response = await apiService.advertisementadbutler_get_publishers_publisherid_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const advertisementadbutler_response_get_RetrievePublishersSlice = createSlice({
  name: "advertisementadbutler_response_get_RetrievePublishers",
  initialState,
  reducers: {},
  extraReducers: {
    [advertisementadbutler_get_publishers_publisherid_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [advertisementadbutler_get_publishers_publisherid_read.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [advertisementadbutler_get_publishers_publisherid_read.rejected]: (
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
  advertisementadbutler_get_publishers_publisherid_read,
  slice: advertisementadbutler_response_get_RetrievePublishersSlice
}
