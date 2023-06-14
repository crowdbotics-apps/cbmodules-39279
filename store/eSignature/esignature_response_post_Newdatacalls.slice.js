import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const esignature_post_webhook_create = createAsyncThunk(
  "esignature_response_post_Newdatacalls/esignature_post_webhook_create",
  async payload => {
    const response = await apiService.esignature_post_webhook_create(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const esignature_response_post_NewdatacallsSlice = createSlice({
  name: "esignature_response_post_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [esignature_post_webhook_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [esignature_post_webhook_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [esignature_post_webhook_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  esignature_post_webhook_create,
  slice: esignature_response_post_NewdatacallsSlice
}
