import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const simplex_get_supported_countries_list = createAsyncThunk(
  "simplex_response_get_SupportedCountries/simplex_get_supported_countries_list",
  async payload => {
    const response = await apiService.simplex_get_supported_countries_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const simplex_response_get_SupportedCountriesSlice = createSlice({
  name: "simplex_response_get_SupportedCountries",
  initialState,
  reducers: {},
  extraReducers: {
    [simplex_get_supported_countries_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [simplex_get_supported_countries_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [simplex_get_supported_countries_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  simplex_get_supported_countries_list,
  slice: simplex_response_get_SupportedCountriesSlice
}
