import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const hubspotapi_get_crm_v3_objects_companies_list = createAsyncThunk("hubspotapi_response_get_GetCRMCompaniesLists/hubspotapi_get_crm_v3_objects_companies_list", async payload => {
  const response = await apiService.hubspotapi_get_crm_v3_objects_companies_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const hubspotapi_response_get_GetCRMCompaniesListsSlice = createSlice({
  name: "hubspotapi_response_get_GetCRMCompaniesLists",
  initialState,
  reducers: {},
  extraReducers: {
    [hubspotapi_get_crm_v3_objects_companies_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [hubspotapi_get_crm_v3_objects_companies_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [hubspotapi_get_crm_v3_objects_companies_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  hubspotapi_get_crm_v3_objects_companies_list,
  slice: hubspotapi_response_get_GetCRMCompaniesListsSlice
};