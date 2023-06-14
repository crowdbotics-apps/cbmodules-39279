import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const solunardataapi_get_solunar_list = createAsyncThunk(
  "solunardataapi_response_get_GetSolunarData/solunardataapi_get_solunar_list",
  async payload => {
    const response = await apiService.solunardataapi_get_solunar_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const solunardataapi_response_get_GetSolunarDataSlice = createSlice({
  name: "solunardataapi_response_get_GetSolunarData",
  initialState,
  reducers: {},
  extraReducers: {
    [solunardataapi_get_solunar_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [solunardataapi_get_solunar_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [solunardataapi_get_solunar_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  solunardataapi_get_solunar_list,
  slice: solunardataapi_response_get_GetSolunarDataSlice
}
