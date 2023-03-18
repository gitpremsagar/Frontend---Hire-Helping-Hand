const hhhBackendHostname = "http://localhost:4040";

export const envVars = {
  BACKEND_API_FOR_USERS: `${hhhBackendHostname}/api/users`,

  BACKEND_API_FOR_LOGGING_IN_USERS: `${hhhBackendHostname}/api/users/login`,

  BACKEND_API_ENDPOINT_FOR_DECODING_TOKEN: `${hhhBackendHostname}/api/authenticate`,

  BACKEND_API_ENDPOINT_FOR_REPORTING_SPAM_SIGNUP: `${hhhBackendHostname}/api/report-spam-signup`,

  BACKEND_API_ENDPOINT_FOR_VERIFYING_EMAIL: `${hhhBackendHostname}/api/verify/email`,

  BACKEND_API_ENDPOINT_FOR_PROPOSALS: `${hhhBackendHostname}/api/proposals`,

  BACKEND_API_ENDPOINT_FOR_PROJECTS: `${hhhBackendHostname}/api/projects`,

  BACKEND_API_ENDPOINT_FOR_SEARCHING_PROPOSALS: `${hhhBackendHostname}/api/search/proposals`,

  BACKEND_API_ENDPOINT_FOR_SEARCHING_PROJECTS: `${hhhBackendHostname}/api/search/projects`,

  BACKEND_API_ENDPOINT_FOR_UPLOADING_FREELANCER_PROFILE_PIC: `${hhhBackendHostname}/api/upload-avatar/freelancer`,

  BACKEND_API_ENDPOINT_FOR_UPLOADING_CLIENT_PROFILE_PIC: `${hhhBackendHostname}/api/upload-avatar/client`,

  BACKEND_API_ENDPOINT_FOR_GETTING_CLIENT_PROFILE_PIC: `${hhhBackendHostname}/public/uploads/clientProfileImages`,

  BACKEND_API_ENDPOINT_FOR_GETTING_FREELANCER_PROFILE_PIC: `${hhhBackendHostname}/public/uploads/freelancerProfileImages`,
};
