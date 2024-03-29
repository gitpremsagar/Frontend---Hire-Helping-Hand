import { useEffect } from "react";

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

// freelancing service's categories related
export const BACKEND_API_ENDPOINT_FOR_TOP_LEVEL_CATEGORIES = `${hhhBackendHostname}/api/top-level-categories`;
export const BACKEND_API_ENDPOINT_FOR_MID_LEVEL_CATEGORIES = `${hhhBackendHostname}/api/mid-level-categories`;
export const BACKEND_API_ENDPOINT_FOR_BOTTOM_LEVEL_CATEGORIES = `${hhhBackendHostname}/api/bottom-level-categories`;

export const BACKEND_API_ENDPOINT_FOR_USERS_CHAT_CONTACTS = `${hhhBackendHostname}/api/chat-contacts`;
export const BACKEND_API_ENDPOINT_FOR_USERS_CHAT_MESSAGES = `${hhhBackendHostname}/api/chat-messages`;

//projects related
export const BACKEND_API_ENDPOINT_FOR_UPLOADING_PROJECT_ATTACHMENT_FILES = `${hhhBackendHostname}/api/upload/project-attachments`;

// proposals related
export const BACKEND_API_FOR_UPLOADING_PROPOSAL_IMAGES = `${hhhBackendHostname}/api/uploads/proposalImages`;
export const BASE_URL_FOR_PROPOSAL_IMAGES = `${hhhBackendHostname}/public/uploads/proposalsImages/raw`;
export const BACKEND_API_ENDPOINT_FOR_GETTING_PROPOSALS_BY_FREELANCER_ID = `${hhhBackendHostname}/api/proposals/all`;
export const BACKEND_API_ENDPOINT_FOR_GETTING_DRAFT_PROPOSALS_BY_FREELANCER_ID = `${hhhBackendHostname}/api/proposals/draft`;
export const BACKEND_API_ENDPOINT_FOR_GETTING_PAUSED_PROPOSALS_BY_FREELANCER_ID = `${hhhBackendHostname}/api/proposals/paused`;
export const BACKEND_API_ENDPOINT_FOR_GETTING_ACTIVE_PROPOSALS_BY_FREELANCER_ID = `${hhhBackendHostname}/api/proposals/active`;

// export const BACKEND_API_ENDPOINT_FOR_GETTING_COMPLETED_PROPOSALS_BY_FREELANCER_ID = `${hhhBackendHostname}/api/proposals/freelancer/completed/all`;
// export const BACKEND_API_ENDPOINT_FOR_GETTING_PROPOSALS_BY_CLIENT_ID = `${hhhBackendHostname}/api/proposals/client/all`;

// ongoing projects related
// export const BACKEND_API_ENDPOINT_FOR_GETTING_ONGOING_PROJECTS_BY_CLIENT_ID = `${hhhBackendHostname}/api/on-going-projects/client/all`;
export const BACKEND_API_ENDPOINT_FOR_GETTING_ONGOING_PROJECTS_BY_FREELANCER_ID = `${hhhBackendHostname}/api/on-going-projects/freelancer`;

export const REDIRECT_TO_LOGIN_PAGE_IF_NO_TOKEN_PRESENT = () => {
  //redirect to login page if token is not present
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      alert("Please login first!");
      window.location.href = "/login";
    }
  }, []);
};
