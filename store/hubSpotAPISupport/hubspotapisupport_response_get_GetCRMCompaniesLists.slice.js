import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const hubspotapisupport_get_crm_v3_objects_companies_list = createAsyncThunk(
  "hubspotapisupport_response_get_GetCRMCompaniesLists/hubspotapisupport_get_crm_v3_objects_companies_list",
  async payload => {
    const response = await apiService.hubspotapisupport_get_crm_v3_objects_companies_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const hubspotapisupport_response_get_GetCRMCompaniesListsSlice = createSlice({
  name: "hubspotapisupport_response_get_GetCRMCompaniesLists",
  initialState,
  reducers: {},
  extraReducers: {
    [hubspotapisupport_get_crm_v3_objects_companies_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [hubspotapisupport_get_crm_v3_objects_companies_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [hubspotapisupport_get_crm_v3_objects_companies_list.rejected]: (
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
  hubspotapisupport_get_crm_v3_objects_companies_list,
  slice: hubspotapisupport_response_get_GetCRMCompaniesListsSlice
}
