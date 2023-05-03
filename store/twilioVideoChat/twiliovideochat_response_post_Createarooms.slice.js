import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const twiliovideochat_post_v1_Rooms_create = createAsyncThunk(
  "twiliovideochat_response_post_Createarooms/twiliovideochat_post_v1_Rooms_create",
  async payload => {
    const response = await apiService.twiliovideochat_post_v1_Rooms_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const twiliovideochat_response_post_CreatearoomsSlice = createSlice({
  name: "twiliovideochat_response_post_Createarooms",
  initialState,
  reducers: {},
  extraReducers: {
    [twiliovideochat_post_v1_Rooms_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [twiliovideochat_post_v1_Rooms_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [twiliovideochat_post_v1_Rooms_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  twiliovideochat_post_v1_Rooms_create,
  slice: twiliovideochat_response_post_CreatearoomsSlice
}
