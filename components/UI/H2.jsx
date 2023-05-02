import React from "react";

export default function H2({ children, className }) {
  return (
    <h2 className={`text-lg md:text-2xl lg:text-4xl font-bold ${className}`}>
      {children}
    </h2>
  );
}
