import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const twilioapi_post_20100401_Accounts_account_sid_Messagesjson_create = createAsyncThunk("twilioapi_response_post_SendSMS/twilioapi_post_20100401_Accounts_account_sid_Messagesjson_create", async payload => {
  const response = await apiService.twilioapi_post_20100401_Accounts_account_sid_Messagesjson_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const twilioapi_response_post_SendSMSSlice = createSlice({
  name: "twilioapi_response_post_SendSMS",
  initialState,
  reducers: {},
  extraReducers: {
    [twilioapi_post_20100401_Accounts_account_sid_Messagesjson_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [twilioapi_post_20100401_Accounts_account_sid_Messagesjson_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [twilioapi_post_20100401_Accounts_account_sid_Messagesjson_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  twilioapi_post_20100401_Accounts_account_sid_Messagesjson_create,
  slice: twilioapi_response_post_SendSMSSlice
};