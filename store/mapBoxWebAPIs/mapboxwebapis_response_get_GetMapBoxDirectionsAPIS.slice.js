import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const mapboxwebapis_get_directions_v5_mapbox_profile_origin_latorigin_lngdest_latdest_lngjson_list = createAsyncThunk("mapboxwebapis_response_get_GetMapBoxDirectionsAPIS/mapboxwebapis_get_directions_v5_mapbox_profile_origin_latorigin_lngdest_latdest_lngjson_list", async payload => {
  const response = await apiService.mapboxwebapis_get_directions_v5_mapbox_profile_origin_latorigin_lngdest_latdest_lngjson_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const mapboxwebapis_response_get_GetMapBoxDirectionsAPISSlice = createSlice({
  name: "mapboxwebapis_response_get_GetMapBoxDirectionsAPIS",
  initialState,
  reducers: {},
  extraReducers: {
    [mapboxwebapis_get_directions_v5_mapbox_profile_origin_latorigin_lngdest_latdest_lngjson_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [mapboxwebapis_get_directions_v5_mapbox_profile_origin_latorigin_lngdest_latdest_lngjson_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [mapboxwebapis_get_directions_v5_mapbox_profile_origin_latorigin_lngdest_latdest_lngjson_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  mapboxwebapis_get_directions_v5_mapbox_profile_origin_latorigin_lngdest_latdest_lngjson_list,
  slice: mapboxwebapis_response_get_GetMapBoxDirectionsAPISSlice
};