import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const realtorspropertyresourceapi_get_catalog_product_id_read = createAsyncThunk(
  "realtorspropertyresourceapi_response_get_GetSingleProducts/realtorspropertyresourceapi_get_catalog_product_id_read",
  async payload => {
    const response = await apiService.realtorspropertyresourceapi_get_catalog_product_id_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const realtorspropertyresourceapi_response_get_GetSingleProductsSlice = createSlice(
  {
    name: "realtorspropertyresourceapi_response_get_GetSingleProducts",
    initialState,
    reducers: {},
    extraReducers: {
      [realtorspropertyresourceapi_get_catalog_product_id_read.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [realtorspropertyresourceapi_get_catalog_product_id_read.fulfilled]: (
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
      [realtorspropertyresourceapi_get_catalog_product_id_read.rejected]: (
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
  realtorspropertyresourceapi_get_catalog_product_id_read,
  slice: realtorspropertyresourceapi_response_get_GetSingleProductsSlice
}
