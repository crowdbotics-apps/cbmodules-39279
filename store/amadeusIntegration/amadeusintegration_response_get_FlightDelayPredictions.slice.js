import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const amadeusintegration_get_travel_predictions_flightdelay_list = createAsyncThunk(
  "amadeusintegration_response_get_FlightDelayPredictions/amadeusintegration_get_travel_predictions_flightdelay_list",
  async payload => {
    const response = await apiService.amadeusintegration_get_travel_predictions_flightdelay_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const amadeusintegration_response_get_FlightDelayPredictionsSlice = createSlice(
  {
    name: "amadeusintegration_response_get_FlightDelayPredictions",
    initialState,
    reducers: {},
    extraReducers: {
      [amadeusintegration_get_travel_predictions_flightdelay_list.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [amadeusintegration_get_travel_predictions_flightdelay_list.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      },
      [amadeusintegration_get_travel_predictions_flightdelay_list.rejected]: (
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
  amadeusintegration_get_travel_predictions_flightdelay_list,
  slice: amadeusintegration_response_get_FlightDelayPredictionsSlice
}
