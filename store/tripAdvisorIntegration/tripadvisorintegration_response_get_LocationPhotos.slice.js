import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const tripadvisorintegration_get_location_location_id_photos_read = createAsyncThunk(
  "tripadvisorintegration_response_get_LocationPhotos/tripadvisorintegration_get_location_location_id_photos_read",
  async payload => {
    const response = await apiService.tripadvisorintegration_get_location_location_id_photos_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const tripadvisorintegration_response_get_LocationPhotosSlice = createSlice({
  name: "tripadvisorintegration_response_get_LocationPhotos",
  initialState,
  reducers: {},
  extraReducers: {
    [tripadvisorintegration_get_location_location_id_photos_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [tripadvisorintegration_get_location_location_id_photos_read.fulfilled]: (
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
    [tripadvisorintegration_get_location_location_id_photos_read.rejected]: (
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
  tripadvisorintegration_get_location_location_id_photos_read,
  slice: tripadvisorintegration_response_get_LocationPhotosSlice
}