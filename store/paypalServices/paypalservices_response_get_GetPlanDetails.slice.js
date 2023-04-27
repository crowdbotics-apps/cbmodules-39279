import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const paypalservices_get_v1_billing_plans_plan_id_list = createAsyncThunk("paypalservices_response_get_GetPlanDetails/paypalservices_get_v1_billing_plans_plan_id_list", async payload => {
  const response = await apiService.paypalservices_get_v1_billing_plans_plan_id_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const paypalservices_response_get_GetPlanDetailsSlice = createSlice({
  name: "paypalservices_response_get_GetPlanDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [paypalservices_get_v1_billing_plans_plan_id_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [paypalservices_get_v1_billing_plans_plan_id_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [paypalservices_get_v1_billing_plans_plan_id_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  paypalservices_get_v1_billing_plans_plan_id_list,
  slice: paypalservices_response_get_GetPlanDetailsSlice
};