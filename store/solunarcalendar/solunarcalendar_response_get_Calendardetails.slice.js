import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const solunarcalendar_get_solunar_latitudelongitudedatetz_read = createAsyncThunk(
  "solunarcalendar_response_get_Calendardetails/solunarcalendar_get_solunar_latitudelongitudedatetz_read",
  async payload => {
    const response = await apiService.solunarcalendar_get_solunar_latitudelongitudedatetz_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const solunarcalendar_response_get_CalendardetailsSlice = createSlice({
  name: "solunarcalendar_response_get_Calendardetails",
  initialState,
  reducers: {},
  extraReducers: {
    [solunarcalendar_get_solunar_latitudelongitudedatetz_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [solunarcalendar_get_solunar_latitudelongitudedatetz_read.fulfilled]: (
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
    [solunarcalendar_get_solunar_latitudelongitudedatetz_read.rejected]: (
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
  solunarcalendar_get_solunar_latitudelongitudedatetz_read,
  slice: solunarcalendar_response_get_CalendardetailsSlice
}
