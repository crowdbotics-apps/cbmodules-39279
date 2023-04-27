import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const wordpressapi_get_rest_v11_sites_dummy15wordpresscom_posts_post_id_likes_new_list = createAsyncThunk("wordpressapi_response_get_LikePosts/wordpressapi_get_rest_v11_sites_dummy15wordpresscom_posts_post_id_likes_new_list", async payload => {
  const response = await apiService.wordpressapi_get_rest_v11_sites_dummy15wordpresscom_posts_post_id_likes_new_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const wordpressapi_response_get_LikePostsSlice = createSlice({
  name: "wordpressapi_response_get_LikePosts",
  initialState,
  reducers: {},
  extraReducers: {
    [wordpressapi_get_rest_v11_sites_dummy15wordpresscom_posts_post_id_likes_new_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [wordpressapi_get_rest_v11_sites_dummy15wordpresscom_posts_post_id_likes_new_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [wordpressapi_get_rest_v11_sites_dummy15wordpresscom_posts_post_id_likes_new_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  wordpressapi_get_rest_v11_sites_dummy15wordpresscom_posts_post_id_likes_new_list,
  slice: wordpressapi_response_get_LikePostsSlice
};