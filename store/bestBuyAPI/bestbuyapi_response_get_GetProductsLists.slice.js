import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const bestbuyapi_get_v1_products_list = createAsyncThunk(
  "bestbuyapi_response_get_GetProductsLists/bestbuyapi_get_v1_products_list",
  async payload => {
    const response = await apiService.bestbuyapi_get_v1_products_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bestbuyapi_response_get_GetProductsListsSlice = createSlice({
  name: "bestbuyapi_response_get_GetProductsLists",
  initialState,
  reducers: {},
  extraReducers: {
    [bestbuyapi_get_v1_products_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [bestbuyapi_get_v1_products_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [bestbuyapi_get_v1_products_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  bestbuyapi_get_v1_products_list,
  slice: bestbuyapi_response_get_GetProductsListsSlice
}
