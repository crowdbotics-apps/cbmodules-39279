import axios from "axios"
const matrix = axios.create({
  baseURL: "https://matrix.org",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function matrix_get__matrix_client_v3_account_3pid_read(payload) {
  return matrix.get(`/_matrix/client/v3/account/3pid`, {
    params: { access_token: payload.access_token }
  })
}
function matrix_get__matrix_client_v1_rooms_room_id_hierarchy_read(payload) {
  return matrix.get(`/_matrix/client/v1/rooms/${payload.room_id}/hierarchy`, {
    params: { access_token: payload.access_token }
  })
}
export const apiService = {
  matrix_get__matrix_client_v3_account_3pid_read,
  matrix_get__matrix_client_v1_rooms_room_id_hierarchy_read
}
