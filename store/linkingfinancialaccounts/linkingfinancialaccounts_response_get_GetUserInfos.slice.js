import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const linkingfinancialaccounts_get_v1_openid_connect_userinfo_read = createAsyncThunk("linkingfinancialaccounts_response_get_GetUserInfos/linkingfinancialaccounts_get_v1_openid_connect_userinfo_read", async payload => {
  const response = await apiService.linkingfinancialaccounts_get_v1_openid_connect_userinfo_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const linkingfinancialaccounts_response_get_GetUserInfosSlice = createSlice({
  name: "linkingfinancialaccounts_response_get_GetUserInfos",
  initialState,
  reducers: {},
  extraReducers: {
    [linkingfinancialaccounts_get_v1_openid_connect_userinfo_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [linkingfinancialaccounts_get_v1_openid_connect_userinfo_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [linkingfinancialaccounts_get_v1_openid_connect_userinfo_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  linkingfinancialaccounts_get_v1_openid_connect_userinfo_read,
  slice: linkingfinancialaccounts_response_get_GetUserInfosSlice
};