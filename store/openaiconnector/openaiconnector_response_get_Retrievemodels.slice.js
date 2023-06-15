import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const openaiconnector_get_v1_models_model_read = createAsyncThunk(
  "openaiconnector_response_get_Retrievemodels/openaiconnector_get_v1_models_model_read",
  async payload => {
    const response = await apiService.openaiconnector_get_v1_models_model_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const openaiconnector_response_get_RetrievemodelsSlice = createSlice({
  name: "openaiconnector_response_get_Retrievemodels",
  initialState,
  reducers: {},
  extraReducers: {
    [openaiconnector_get_v1_models_model_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [openaiconnector_get_v1_models_model_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [openaiconnector_get_v1_models_model_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  openaiconnector_get_v1_models_model_read,
  slice: openaiconnector_response_get_RetrievemodelsSlice
}
