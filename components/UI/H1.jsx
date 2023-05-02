import React from "react";

export default function H1({ children, className }) {
  return (
    <h1
      className={`text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold  ${className}`}
    >
      {children}
    </h1>
  );
}
