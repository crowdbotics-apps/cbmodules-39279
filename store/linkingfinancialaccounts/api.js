import axios from "axios";
import { LINKING_FINANCIAL_ACCOUNTS_TOKEN } from "react-native-dotenv";
const linkingfinancialaccounts = axios.create({
  baseURL: "https://sandbox-accounts.platform.intuit.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${LINKING_FINANCIAL_ACCOUNTS_TOKEN}`
  }
});

function linkingfinancialaccounts_get_v1_openid_connect_userinfo_read(payload) {
  return linkingfinancialaccounts.get(`/v1/openid_connect/userinfo`);
}

function linkingfinancialaccounts_get_v3_company_company_id_companyinfo_minor_version_read(payload) {
  return linkingfinancialaccounts.get(`/v3/company/${payload.company_id}/companyinfo/${payload.minor_version}`);
}

export const apiService = {
  linkingfinancialaccounts_get_v1_openid_connect_userinfo_read,
  linkingfinancialaccounts_get_v3_company_company_id_companyinfo_minor_version_read
};