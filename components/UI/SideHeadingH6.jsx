import React from "react";

export default function SideHeadingH6({ children, className }) {
  return (
    <h6
      className={`text-base sm:text-lg md:text-xl lg:text-lg font-bold inline ${className}`}
    >
      {children}
    </h6>
  );
}
