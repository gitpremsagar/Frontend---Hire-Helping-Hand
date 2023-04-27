import React from "react";

export default function FormElementContainer({ children, className }) {
  return <div className={`mb-10 ${className}`}>{children}</div>;
}
