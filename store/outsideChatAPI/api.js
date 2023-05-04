import axios from "axios"
import { OUTSIDE_APP_API_SUPPORT_TOKEN } from "react-native-dotenv"
const outsideChatAPI = axios.create({
  baseURL: "https://api.revechat.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${OUTSIDE_APP_API_SUPPORT_TOKEN}`
  }
})
function outsidechatapi_get_api_chats_list(payload) {
  return outsideChatAPI.get(`/api/chats`, {
    params: { agent_id: payload.agent_id }
  })
}
function outsidechatapi_get_api_chats_list(payload) {
  return outsideChatAPI.get(`/api/chats/`)
}
function outsidechatapi_get_api_agents_list(payload) {
  return outsideChatAPI.get(`/api/agents/`)
}
export const apiService = {
  outsidechatapi_get_api_chats_list,
  outsidechatapi_get_api_chats_list,
  outsidechatapi_get_api_agents_list
}
