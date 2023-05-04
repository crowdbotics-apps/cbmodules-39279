import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const outsidechatapi_get_api_chats_list = createAsyncThunk(
  "outsidechatapi_response_get_GetChatsLists/outsidechatapi_get_api_chats_list",
  async payload => {
    const response = await apiService.outsidechatapi_get_api_chats_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const outsidechatapi_response_get_GetChatsListsSlice = createSlice({
  name: "outsidechatapi_response_get_GetChatsLists",
  initialState,
  reducers: {},
  extraReducers: {
    [outsidechatapi_get_api_chats_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [outsidechatapi_get_api_chats_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [outsidechatapi_get_api_chats_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  outsidechatapi_get_api_chats_list,
  slice: outsidechatapi_response_get_GetChatsListsSlice
}
