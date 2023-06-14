import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const hellosignapi_post_webhook_create = createAsyncThunk(
  "hellosignapi_response_post_Newdatacalls/hellosignapi_post_webhook_create",
  async payload => {
    const response = await apiService.hellosignapi_post_webhook_create(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const hellosignapi_response_post_NewdatacallsSlice = createSlice({
  name: "hellosignapi_response_post_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [hellosignapi_post_webhook_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [hellosignapi_post_webhook_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [hellosignapi_post_webhook_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  hellosignapi_post_webhook_create,
  slice: hellosignapi_response_post_NewdatacallsSlice
}
