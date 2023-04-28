import React from "react";

export default function H5({ children, className }) {
  return (
    <h6
      className={`text-sm md:text-base lg:text-lg font-bold mb-5 ${className}`}
    >
      {children}
    </h6>
  );
}
