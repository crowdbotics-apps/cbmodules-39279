import axios from "axios";
import { PAYPAL_SERVICES_TOKEN } from "react-native-dotenv";
const paypalServices = axios.create({
  baseURL: "https://api-m.sandbox.paypal.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${PAYPAL_SERVICES_TOKEN}`
  }
});

function paypalservices_post_v1_catalogs_products_create(payload) {
  return paypalServices.post(`/v1/catalogs/products`, payload.data);
}

function paypalservices_get_v1_billing_plans_plan_id_list(payload) {
  return paypalServices.get(`/v1/billing/plans/${payload.plan_id}`);
}

export const apiService = {
  paypalservices_post_v1_catalogs_products_create,
  paypalservices_get_v1_billing_plans_plan_id_list
};