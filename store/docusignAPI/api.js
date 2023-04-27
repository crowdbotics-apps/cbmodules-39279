import axios from "axios";
import "react-native-dotenv";
const docusignAPI = axios.create({
  baseURL: "https://demo.docusign.net",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function docusignapi_get__restapi_v21_accounts_accountId_envelopes_list(payload) {
  return docusignAPI.get(` /restapi/v2.1/accounts/${payload.accountId}/envelopes`, {
    params: {
      folder_ids: payload.folder_ids
    }
  });
}

function docusignapi_get_restapi_v21_accounts_accountId_envelopes_envelopeId_read(payload) {
  return docusignAPI.get(`/restapi/v2.1/accounts/${payload.accountId}/envelopes/${payload.envelopeId}`);
}

export const apiService = {
  docusignapi_get__restapi_v21_accounts_accountId_envelopes_list,
  docusignapi_get_restapi_v21_accounts_accountId_envelopes_envelopeId_read
};