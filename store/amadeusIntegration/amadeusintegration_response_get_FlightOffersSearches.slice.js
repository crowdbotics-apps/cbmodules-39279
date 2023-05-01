import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const amadeusintegration_get_shopping_flightoffers_read = createAsyncThunk(
  "amadeusintegration_response_get_FlightOffersSearches/amadeusintegration_get_shopping_flightoffers_read",
  async payload => {
    const response = await apiService.amadeusintegration_get_shopping_flightoffers_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const amadeusintegration_response_get_FlightOffersSearchesSlice = createSlice({
  name: "amadeusintegration_response_get_FlightOffersSearches",
  initialState,
  reducers: {},
  extraReducers: {
    [amadeusintegration_get_shopping_flightoffers_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [amadeusintegration_get_shopping_flightoffers_read.fulfilled]: (
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
    [amadeusintegration_get_shopping_flightoffers_read.rejected]: (
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
  amadeusintegration_get_shopping_flightoffers_read,
  slice: amadeusintegration_response_get_FlightOffersSearchesSlice
}
