import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const zoominfoapi_get_lookup_inputfields_company_enrich_list = createAsyncThunk(
  "zoominfoapi_response_get_GetCompanyEnrichInputs/zoominfoapi_get_lookup_inputfields_company_enrich_list",
  async payload => {
    const response = await apiService.zoominfoapi_get_lookup_inputfields_company_enrich_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const zoominfoapi_response_get_GetCompanyEnrichInputsSlice = createSlice({
  name: "zoominfoapi_response_get_GetCompanyEnrichInputs",
  initialState,
  reducers: {},
  extraReducers: {
    [zoominfoapi_get_lookup_inputfields_company_enrich_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [zoominfoapi_get_lookup_inputfields_company_enrich_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [zoominfoapi_get_lookup_inputfields_company_enrich_list.rejected]: (
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
  zoominfoapi_get_lookup_inputfields_company_enrich_list,
  slice: zoominfoapi_response_get_GetCompanyEnrichInputsSlice
}
