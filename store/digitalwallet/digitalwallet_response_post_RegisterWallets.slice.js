import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const digitalwallet_post_register_wallet_create = createAsyncThunk(
  "digitalwallet_response_post_RegisterWallets/digitalwallet_post_register_wallet_create",
  async payload => {
    const response = await apiService.digitalwallet_post_register_wallet_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const digitalwallet_response_post_RegisterWalletsSlice = createSlice({
  name: "digitalwallet_response_post_RegisterWallets",
  initialState,
  reducers: {},
  extraReducers: {
    [digitalwallet_post_register_wallet_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [digitalwallet_post_register_wallet_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [digitalwallet_post_register_wallet_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  digitalwallet_post_register_wallet_create,
  slice: digitalwallet_response_post_RegisterWalletsSlice
}
