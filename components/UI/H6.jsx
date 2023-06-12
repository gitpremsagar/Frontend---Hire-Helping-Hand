import React from "react";

export default function H6({ children, className }) {
  return (
    <h6
      className={`text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-5 ${className}`}
    >
      {children}
    </h6>
  );
}
