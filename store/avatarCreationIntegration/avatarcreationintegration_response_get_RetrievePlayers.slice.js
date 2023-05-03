import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const avatarcreationintegration_get_players_read = createAsyncThunk(
  "avatarcreationintegration_response_get_RetrievePlayers/avatarcreationintegration_get_players_read",
  async payload => {
    const response = await apiService.avatarcreationintegration_get_players_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const avatarcreationintegration_response_get_RetrievePlayersSlice = createSlice(
  {
    name: "avatarcreationintegration_response_get_RetrievePlayers",
    initialState,
    reducers: {},
    extraReducers: {
      [avatarcreationintegration_get_players_read.pending]: (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [avatarcreationintegration_get_players_read.fulfilled]: (
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
      [avatarcreationintegration_get_players_read.rejected]: (
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
  avatarcreationintegration_get_players_read,
  slice: avatarcreationintegration_response_get_RetrievePlayersSlice
}
