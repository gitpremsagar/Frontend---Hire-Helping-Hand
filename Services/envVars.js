const hhhBackendHostname = "http://localhost:4040";

export const envVars = {
  BACKEND_API_FOR_USERS: `${hhhBackendHostname}/api/users`,

  BACKEND_API_FOR_LOGGING_IN_USERS: `${hhhBackendHostname}/api/users/login`,

  BACKEND_API_ENDPOINT_FOR_DECODING_TOKEN: `${hhhBackendHostname}/api/authenticate`,

  BACKEND_API_ENDPOINT_FOR_REPORTING_SPAM_SIGNUP: `${hhhBackendHostname}/api/report-spam-signup`,
};
