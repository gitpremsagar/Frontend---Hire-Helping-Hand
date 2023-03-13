import React from "react";

export default function ErrorsPage({ statusCode }) {
  let message = "";
  switch (statusCode) {
    case 400:
      message = "Bad Request";
      break;
    case 401:
      message = "Unauthorized";
      break;
    case 403:
      message = "Forbidden";
      break;
    case 404:
      message = "Page not Found";
      break;
    case 500:
      message = "Internal Server Error";
      break;
    default:
      message = "An error occurred";
      break;
  }
  return <div>{message}</div>;
}
