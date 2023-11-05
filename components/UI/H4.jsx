import React from "react";

export default function H4({ children, className }) {
  return (
    <h4 className={`text-sm md:text-lg lg:text-xl font-bold mb-5 ${className}`}>
      {children}
    </h4>
  );
}
