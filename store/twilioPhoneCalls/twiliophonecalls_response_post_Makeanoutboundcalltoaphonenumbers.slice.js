import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const twiliophonecalls_post_20100401_Accounts_account_sid_Callsjson_create = createAsyncThunk(
  "twiliophonecalls_response_post_Makeanoutboundcalltoaphonenumbers/twiliophonecalls_post_20100401_Accounts_account_sid_Callsjson_create",
  async payload => {
    const response = await apiService.twiliophonecalls_post_20100401_Accounts_account_sid_Callsjson_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const twiliophonecalls_response_post_MakeanoutboundcalltoaphonenumbersSlice = createSlice(
  {
    name: "twiliophonecalls_response_post_Makeanoutboundcalltoaphonenumbers",
    initialState,
    reducers: {},
    extraReducers: {
      [twiliophonecalls_post_20100401_Accounts_account_sid_Callsjson_create.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [twiliophonecalls_post_20100401_Accounts_account_sid_Callsjson_create.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      },
      [twiliophonecalls_post_20100401_Accounts_account_sid_Callsjson_create.rejected]: (
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
  twiliophonecalls_post_20100401_Accounts_account_sid_Callsjson_create,
  slice: twiliophonecalls_response_post_MakeanoutboundcalltoaphonenumbersSlice
}
