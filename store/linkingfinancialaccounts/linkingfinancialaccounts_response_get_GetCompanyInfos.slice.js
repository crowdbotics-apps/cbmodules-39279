import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const linkingfinancialaccounts_get_v3_company_company_id_companyinfo_minor_version_read = createAsyncThunk(
  "linkingfinancialaccounts_response_get_GetCompanyInfos/linkingfinancialaccounts_get_v3_company_company_id_companyinfo_minor_version_read",
  async payload => {
    const response = await apiService.linkingfinancialaccounts_get_v3_company_company_id_companyinfo_minor_version_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const linkingfinancialaccounts_response_get_GetCompanyInfosSlice = createSlice({
  name: "linkingfinancialaccounts_response_get_GetCompanyInfos",
  initialState,
  reducers: {},
  extraReducers: {
    [linkingfinancialaccounts_get_v3_company_company_id_companyinfo_minor_version_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [linkingfinancialaccounts_get_v3_company_company_id_companyinfo_minor_version_read.fulfilled]: (
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
    [linkingfinancialaccounts_get_v3_company_company_id_companyinfo_minor_version_read.rejected]: (
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
  linkingfinancialaccounts_get_v3_company_company_id_companyinfo_minor_version_read,
  slice: linkingfinancialaccounts_response_get_GetCompanyInfosSlice
}
