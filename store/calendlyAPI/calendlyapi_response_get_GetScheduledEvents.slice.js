import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const calendlyapi_get_scheduled_events_list = createAsyncThunk(
  "calendlyapi_response_get_GetScheduledEvents/calendlyapi_get_scheduled_events_list",
  async payload => {
    const response = await apiService.calendlyapi_get_scheduled_events_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const calendlyapi_response_get_GetScheduledEventsSlice = createSlice({
  name: "calendlyapi_response_get_GetScheduledEvents",
  initialState,
  reducers: {},
  extraReducers: {
    [calendlyapi_get_scheduled_events_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [calendlyapi_get_scheduled_events_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [calendlyapi_get_scheduled_events_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  calendlyapi_get_scheduled_events_list,
  slice: calendlyapi_response_get_GetScheduledEventsSlice
}
