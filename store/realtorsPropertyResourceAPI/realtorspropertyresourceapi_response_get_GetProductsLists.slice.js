import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const realtorspropertyresourceapi_get_products_list = createAsyncThunk(
  "realtorspropertyresourceapi_response_get_GetProductsLists/realtorspropertyresourceapi_get_products_list",
  async payload => {
    const response = await apiService.realtorspropertyresourceapi_get_products_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const realtorspropertyresourceapi_response_get_GetProductsListsSlice = createSlice(
  {
    name: "realtorspropertyresourceapi_response_get_GetProductsLists",
    initialState,
    reducers: {},
    extraReducers: {
      [realtorspropertyresourceapi_get_products_list.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [realtorspropertyresourceapi_get_products_list.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      },
      [realtorspropertyresourceapi_get_products_list.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      }
    }
  }
)
export default {
  realtorspropertyresourceapi_get_products_list,
  slice: realtorspropertyresourceapi_response_get_GetProductsListsSlice
}