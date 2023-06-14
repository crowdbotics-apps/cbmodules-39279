import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const twiliosmsandemail_post_20100401_Accounts_account_sid_Keysjson_create = createAsyncThunk("twiliosmsandemail_response_post_CreateanewAPIkeys/twiliosmsandemail_post_20100401_Accounts_account_sid_Keysjson_create", async payload => {
  const response = await apiService.twiliosmsandemail_post_20100401_Accounts_account_sid_Keysjson_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const twiliosmsandemail_response_post_CreateanewAPIkeysSlice = createSlice({
  name: "twiliosmsandemail_response_post_CreateanewAPIkeys",
  initialState,
  reducers: {},
  extraReducers: {
    [twiliosmsandemail_post_20100401_Accounts_account_sid_Keysjson_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [twiliosmsandemail_post_20100401_Accounts_account_sid_Keysjson_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [twiliosmsandemail_post_20100401_Accounts_account_sid_Keysjson_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  twiliosmsandemail_post_20100401_Accounts_account_sid_Keysjson_create,
  slice: twiliosmsandemail_response_post_CreateanewAPIkeysSlice
};