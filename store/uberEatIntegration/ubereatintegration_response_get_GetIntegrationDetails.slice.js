import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const ubereatintegration_get_eats_stores_store_id_pos_data_read = createAsyncThunk(
  "ubereatintegration_response_get_GetIntegrationDetails/ubereatintegration_get_eats_stores_store_id_pos_data_read",
  async payload => {
    const response = await apiService.ubereatintegration_get_eats_stores_store_id_pos_data_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const ubereatintegration_response_get_GetIntegrationDetailsSlice = createSlice({
  name: "ubereatintegration_response_get_GetIntegrationDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [ubereatintegration_get_eats_stores_store_id_pos_data_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [ubereatintegration_get_eats_stores_store_id_pos_data_read.fulfilled]: (
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
    [ubereatintegration_get_eats_stores_store_id_pos_data_read.rejected]: (
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
  ubereatintegration_get_eats_stores_store_id_pos_data_read,
  slice: ubereatintegration_response_get_GetIntegrationDetailsSlice
}
