import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const matrix_get__matrix_client_v3_account_3pid_read = createAsyncThunk(
  "matrix_response_get_ListUsersThirdPartyindentifiers/matrix_get__matrix_client_v3_account_3pid_read",
  async payload => {
    const response = await apiService.matrix_get__matrix_client_v3_account_3pid_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const matrix_response_get_ListUsersThirdPartyindentifiersSlice = createSlice({
  name: "matrix_response_get_ListUsersThirdPartyindentifiers",
  initialState,
  reducers: {},
  extraReducers: {
    [matrix_get__matrix_client_v3_account_3pid_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [matrix_get__matrix_client_v3_account_3pid_read.fulfilled]: (
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
    [matrix_get__matrix_client_v3_account_3pid_read.rejected]: (
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
  matrix_get__matrix_client_v3_account_3pid_read,
  slice: matrix_response_get_ListUsersThirdPartyindentifiersSlice
}
