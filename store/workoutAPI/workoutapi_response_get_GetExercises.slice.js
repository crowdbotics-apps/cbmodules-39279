import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const workoutapi_get_api_v2_exercise_list = createAsyncThunk(
  "workoutapi_response_get_GetExercises/workoutapi_get_api_v2_exercise_list",
  async payload => {
    const response = await apiService.workoutapi_get_api_v2_exercise_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const workoutapi_response_get_GetExercisesSlice = createSlice({
  name: "workoutapi_response_get_GetExercises",
  initialState,
  reducers: {},
  extraReducers: {
    [workoutapi_get_api_v2_exercise_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [workoutapi_get_api_v2_exercise_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [workoutapi_get_api_v2_exercise_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  workoutapi_get_api_v2_exercise_list,
  slice: workoutapi_response_get_GetExercisesSlice
}
