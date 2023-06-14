import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const retslybridgeapi_get_api_v2_test_agents_list = createAsyncThunk("retslybridgeapi_response_get_GetAgentsLists/retslybridgeapi_get_api_v2_test_agents_list", async payload => {
  const response = await apiService.retslybridgeapi_get_api_v2_test_agents_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const retslybridgeapi_response_get_GetAgentsListsSlice = createSlice({
  name: "retslybridgeapi_response_get_GetAgentsLists",
  initialState,
  reducers: {},
  extraReducers: {
    [retslybridgeapi_get_api_v2_test_agents_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [retslybridgeapi_get_api_v2_test_agents_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [retslybridgeapi_get_api_v2_test_agents_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  retslybridgeapi_get_api_v2_test_agents_list,
  slice: retslybridgeapi_response_get_GetAgentsListsSlice
};