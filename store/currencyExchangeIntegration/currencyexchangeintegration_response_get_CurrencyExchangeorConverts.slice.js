import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const currencyexchangeintegration_get_convert_read = createAsyncThunk(
  "currencyexchangeintegration_response_get_CurrencyExchangeorConverts/currencyexchangeintegration_get_convert_read",
  async payload => {
    const response = await apiService.currencyexchangeintegration_get_convert_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const currencyexchangeintegration_response_get_CurrencyExchangeorConvertsSlice = createSlice(
  {
    name: "currencyexchangeintegration_response_get_CurrencyExchangeorConverts",
    initialState,
    reducers: {},
    extraReducers: {
      [currencyexchangeintegration_get_convert_read.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [currencyexchangeintegration_get_convert_read.fulfilled]: (
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
      [currencyexchangeintegration_get_convert_read.rejected]: (
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
  currencyexchangeintegration_get_convert_read,
  slice: currencyexchangeintegration_response_get_CurrencyExchangeorConvertsSlice
}
