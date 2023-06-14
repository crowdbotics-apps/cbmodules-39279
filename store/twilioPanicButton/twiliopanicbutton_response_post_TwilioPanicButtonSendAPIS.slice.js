import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const twiliopanicbutton_post_20100401_Accounts_account_id_Messagesjson_create = createAsyncThunk("twiliopanicbutton_response_post_TwilioPanicButtonSendAPIS/twiliopanicbutton_post_20100401_Accounts_account_id_Messagesjson_create", async payload => {
  const response = await apiService.twiliopanicbutton_post_20100401_Accounts_account_id_Messagesjson_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const twiliopanicbutton_response_post_TwilioPanicButtonSendAPISSlice = createSlice({
  name: "twiliopanicbutton_response_post_TwilioPanicButtonSendAPIS",
  initialState,
  reducers: {},
  extraReducers: {
    [twiliopanicbutton_post_20100401_Accounts_account_id_Messagesjson_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [twiliopanicbutton_post_20100401_Accounts_account_id_Messagesjson_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [twiliopanicbutton_post_20100401_Accounts_account_id_Messagesjson_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  twiliopanicbutton_post_20100401_Accounts_account_id_Messagesjson_create,
  slice: twiliopanicbutton_response_post_TwilioPanicButtonSendAPISSlice
};