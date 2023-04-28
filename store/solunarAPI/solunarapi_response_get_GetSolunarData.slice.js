import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const solunarapi_get_solunar_latitudelongitudedatetz_list = createAsyncThunk(
  "solunarapi_response_get_GetSolunarData/solunarapi_get_solunar_latitudelongitudedatetz_list",
  async payload => {
    const response = await apiService.solunarapi_get_solunar_latitudelongitudedatetz_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const solunarapi_response_get_GetSolunarDataSlice = createSlice({
  name: "solunarapi_response_get_GetSolunarData",
  initialState,
  reducers: {},
  extraReducers: {
    [solunarapi_get_solunar_latitudelongitudedatetz_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [solunarapi_get_solunar_latitudelongitudedatetz_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [solunarapi_get_solunar_latitudelongitudedatetz_list.rejected]: (
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
  solunarapi_get_solunar_latitudelongitudedatetz_list,
  slice: solunarapi_response_get_GetSolunarDataSlice
}
