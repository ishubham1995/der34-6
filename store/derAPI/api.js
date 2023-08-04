import axios from "axios"
const derAPI = axios.create({
  baseURL: "https://der34-6.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return derAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return derAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return derAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_swe23_list(payload) {
  return derAPI.get(`/api/v1/swe23/`)
}
function api_v1_swe23_create(payload) {
  return derAPI.post(`/api/v1/swe23/`, payload)
}
function api_v1_swe23_retrieve(payload) {
  return derAPI.get(`/api/v1/swe23/${payload.id}/`)
}
function api_v1_swe23_update(payload) {
  return derAPI.put(`/api/v1/swe23/${payload.id}/`, payload)
}
function api_v1_swe23_partial_update(payload) {
  return derAPI.patch(`/api/v1/swe23/${payload.id}/`, payload)
}
function api_v1_swe23_destroy(payload) {
  return derAPI.delete(`/api/v1/swe23/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return derAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return derAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return derAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return derAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return derAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return derAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return derAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return derAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return derAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return derAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return derAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_swe23_list,
  api_v1_swe23_create,
  api_v1_swe23_retrieve,
  api_v1_swe23_update,
  api_v1_swe23_partial_update,
  api_v1_swe23_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
