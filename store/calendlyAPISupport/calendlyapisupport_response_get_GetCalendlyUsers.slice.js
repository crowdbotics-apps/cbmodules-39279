import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const calendlyapisupport_get_users_me_read = createAsyncThunk(
  "calendlyapisupport_response_get_GetCalendlyUsers/calendlyapisupport_get_users_me_read",
  async payload => {
    const response = await apiService.calendlyapisupport_get_users_me_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const calendlyapisupport_response_get_GetCalendlyUsersSlice = createSlice({
  name: "calendlyapisupport_response_get_GetCalendlyUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [calendlyapisupport_get_users_me_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [calendlyapisupport_get_users_me_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [calendlyapisupport_get_users_me_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  calendlyapisupport_get_users_me_read,
  slice: calendlyapisupport_response_get_GetCalendlyUsersSlice
}
