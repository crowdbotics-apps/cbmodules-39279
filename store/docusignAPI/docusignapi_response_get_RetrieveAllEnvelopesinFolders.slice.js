import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const docusignapi_get__restapi_v21_accounts_accountId_envelopes_list = createAsyncThunk("docusignapi_response_get_RetrieveAllEnvelopesinFolders/docusignapi_get__restapi_v21_accounts_accountId_envelopes_list", async payload => {
  const response = await apiService.docusignapi_get__restapi_v21_accounts_accountId_envelopes_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const docusignapi_response_get_RetrieveAllEnvelopesinFoldersSlice = createSlice({
  name: "docusignapi_response_get_RetrieveAllEnvelopesinFolders",
  initialState,
  reducers: {},
  extraReducers: {
    [docusignapi_get__restapi_v21_accounts_accountId_envelopes_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [docusignapi_get__restapi_v21_accounts_accountId_envelopes_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [docusignapi_get__restapi_v21_accounts_accountId_envelopes_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  docusignapi_get__restapi_v21_accounts_accountId_envelopes_list,
  slice: docusignapi_response_get_RetrieveAllEnvelopesinFoldersSlice
};