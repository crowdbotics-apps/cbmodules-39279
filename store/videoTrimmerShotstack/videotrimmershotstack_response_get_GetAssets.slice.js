import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const videotrimmershotstack_get_assets_id_list = createAsyncThunk(
  "videotrimmershotstack_response_get_GetAssets/videotrimmershotstack_get_assets_id_list",
  async payload => {
    const response = await apiService.videotrimmershotstack_get_assets_id_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const videotrimmershotstack_response_get_GetAssetsSlice = createSlice({
  name: "videotrimmershotstack_response_get_GetAssets",
  initialState,
  reducers: {},
  extraReducers: {
    [videotrimmershotstack_get_assets_id_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [videotrimmershotstack_get_assets_id_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [videotrimmershotstack_get_assets_id_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  videotrimmershotstack_get_assets_id_list,
  slice: videotrimmershotstack_response_get_GetAssetsSlice
}
