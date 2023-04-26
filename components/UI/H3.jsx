import React from "react";

export default function H3({ children, className }) {
  return (
    <h3
      className={`text-lg md:text-xl lg:text-2xl font-bold mb-5 ${className}`}
    >
      {children}
    </h3>
  );
}
