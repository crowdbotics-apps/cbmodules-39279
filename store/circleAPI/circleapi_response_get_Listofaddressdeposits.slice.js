import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const circleapi_get_v1_businessAccount_wallets_addresses_deposit_read = createAsyncThunk(
  "circleapi_response_get_Listofaddressdeposits/circleapi_get_v1_businessAccount_wallets_addresses_deposit_read",
  async payload => {
    const response = await apiService.circleapi_get_v1_businessAccount_wallets_addresses_deposit_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const circleapi_response_get_ListofaddressdepositsSlice = createSlice({
  name: "circleapi_response_get_Listofaddressdeposits",
  initialState,
  reducers: {},
  extraReducers: {
    [circleapi_get_v1_businessAccount_wallets_addresses_deposit_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [circleapi_get_v1_businessAccount_wallets_addresses_deposit_read.fulfilled]: (
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
    [circleapi_get_v1_businessAccount_wallets_addresses_deposit_read.rejected]: (
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
  circleapi_get_v1_businessAccount_wallets_addresses_deposit_read,
  slice: circleapi_response_get_ListofaddressdepositsSlice
}
