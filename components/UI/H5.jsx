import React from "react";

export default function H5({ children, className }) {
  return (
    <h5
      className={`text-base md:text-lg lg:text-xl font-bold mb-5 ${className}`}
    >
      {children}
    </h5>
  );
}
