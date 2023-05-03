import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const avatarcreationintegration_post_players_create = createAsyncThunk(
  "avatarcreationintegration_response_post_CreatePlayers/avatarcreationintegration_post_players_create",
  async payload => {
    const response = await apiService.avatarcreationintegration_post_players_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const avatarcreationintegration_response_post_CreatePlayersSlice = createSlice({
  name: "avatarcreationintegration_response_post_CreatePlayers",
  initialState,
  reducers: {},
  extraReducers: {
    [avatarcreationintegration_post_players_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [avatarcreationintegration_post_players_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [avatarcreationintegration_post_players_create.rejected]: (
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
  avatarcreationintegration_post_players_create,
  slice: avatarcreationintegration_response_post_CreatePlayersSlice
}
