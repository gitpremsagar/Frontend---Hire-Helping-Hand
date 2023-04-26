import React from "react";

export default function H3({ children, className }) {
  return (
    <h3
      className={`text-lg md:text-2xl lg:text-4xl font-bold mb-5 ${className}`}
    >
      {children}
    </h3>
  );
}
