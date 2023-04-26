import React from "react";

export default function H2({ children, className }) {
  return (
    <h2
      className={`text-lg md:text-2xl lg:text-4xl text-gray-800 font-bold mb-5 ${className}`}
    >
      {children}
    </h2>
  );
}
