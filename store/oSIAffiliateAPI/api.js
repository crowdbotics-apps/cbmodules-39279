import axios from "axios";
const oSIAffiliateAPI = axios.create({
  baseURL: "http://newapi.omnistarhost.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function osiaffiliateapi_post_add_user_api_key_create(payload) {
  return oSIAffiliateAPI.post(`/add_user/${payload.api_key}`, payload.data);
}

function osiaffiliateapi_post_list_users_api_key_create(payload) {
  return oSIAffiliateAPI.post(`/list_users/${payload.api_key}`);
}

function osiaffiliateapi_post_delete_user_api_key_create(payload) {
  return oSIAffiliateAPI.post(`/delete_user/${payload.api_key}`, payload.data);
}

function osiaffiliateapi_post_update_user_api_key_create(payload) {
  return oSIAffiliateAPI.post(`/update_user/${payload.api_key}`, payload.data);
}

export const apiService = {
  osiaffiliateapi_post_add_user_api_key_create,
  osiaffiliateapi_post_list_users_api_key_create,
  osiaffiliateapi_post_delete_user_api_key_create,
  osiaffiliateapi_post_update_user_api_key_create
};