import axios from "axios";
import "react-native-dotenv";
const wordpressAPI = axios.create({
  baseURL: "https://public-api.wordpress.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function wordpressapi_post_rest_v11_sites_dummy15wordpresscom_tags_new_create(payload) {
  return wordpressAPI.post(`/rest/v1.1/sites/dummy15.wordpress.com/tags/new`, payload.data);
}

function wordpressapi_get_rest_v11_sites_dummy15wordpresscom_posts_post_id_likes_new_list(payload) {
  return wordpressAPI.get(`/rest/v1.1/sites/dummy15.wordpress.com/posts/${payload.post_id}/likes/new`);
}

export const apiService = {
  wordpressapi_post_rest_v11_sites_dummy15wordpresscom_tags_new_create,
  wordpressapi_get_rest_v11_sites_dummy15wordpresscom_posts_post_id_likes_new_list
};