import React from "react";

export default function Para({ children, className }) {
  return (
    <p
      className={`my-3 sm:my-4 md:my-6 text-xs sm:text-sm lg:text-base ${className}`}
    >
      {children}
    </p>
  );
}
