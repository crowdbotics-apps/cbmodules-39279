import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const calendlyapisupport_get_scheduled_events_list = createAsyncThunk(
  "calendlyapisupport_response_get_GetScheduledEvents/calendlyapisupport_get_scheduled_events_list",
  async payload => {
    const response = await apiService.calendlyapisupport_get_scheduled_events_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const calendlyapisupport_response_get_GetScheduledEventsSlice = createSlice({
  name: "calendlyapisupport_response_get_GetScheduledEvents",
  initialState,
  reducers: {},
  extraReducers: {
    [calendlyapisupport_get_scheduled_events_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [calendlyapisupport_get_scheduled_events_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [calendlyapisupport_get_scheduled_events_list.rejected]: (
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
  calendlyapisupport_get_scheduled_events_list,
  slice: calendlyapisupport_response_get_GetScheduledEventsSlice
}
