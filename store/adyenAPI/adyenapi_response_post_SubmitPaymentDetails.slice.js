import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const adyenapi_post_payments_details_create = createAsyncThunk(
  "adyenapi_response_post_SubmitPaymentDetails/adyenapi_post_payments_details_create",
  async payload => {
    const response = await apiService.adyenapi_post_payments_details_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const adyenapi_response_post_SubmitPaymentDetailsSlice = createSlice({
  name: "adyenapi_response_post_SubmitPaymentDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [adyenapi_post_payments_details_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [adyenapi_post_payments_details_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [adyenapi_post_payments_details_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  adyenapi_post_payments_details_create,
  slice: adyenapi_response_post_SubmitPaymentDetailsSlice
}
