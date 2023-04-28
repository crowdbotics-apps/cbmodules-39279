import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const twiliosmsandemail_get_20100401_Accounts_account_sid_Keys_sidjson_read = createAsyncThunk(
  "twiliosmsandemail_response_get_FetchAPIkeys/twiliosmsandemail_get_20100401_Accounts_account_sid_Keys_sidjson_read",
  async payload => {
    const response = await apiService.twiliosmsandemail_get_20100401_Accounts_account_sid_Keys_sidjson_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const twiliosmsandemail_response_get_FetchAPIkeysSlice = createSlice({
  name: "twiliosmsandemail_response_get_FetchAPIkeys",
  initialState,
  reducers: {},
  extraReducers: {
    [twiliosmsandemail_get_20100401_Accounts_account_sid_Keys_sidjson_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [twiliosmsandemail_get_20100401_Accounts_account_sid_Keys_sidjson_read.fulfilled]: (
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
    [twiliosmsandemail_get_20100401_Accounts_account_sid_Keys_sidjson_read.rejected]: (
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
  twiliosmsandemail_get_20100401_Accounts_account_sid_Keys_sidjson_read,
  slice: twiliosmsandemail_response_get_FetchAPIkeysSlice
}
