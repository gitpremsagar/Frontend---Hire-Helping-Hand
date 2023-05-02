import React from "react";

export default function LabelElement({ children, htmlFor, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-xl sm:text-2xl mb-2 sm:mb-3 md:mb-4 lg:mb-6 ${className}`}
    >
      {children}
    </label>
  );
}
