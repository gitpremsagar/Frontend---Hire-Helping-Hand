import { useRouter } from "next/router";
import React from "react";

export default function Li({ children }) {
  const router = useRouter();
  const pathname = router.pathname;
  // const currentPage = pathname.split("/").pop();
  const parts = pathname.split("/"); // Split the URL by "/"
  const currentPage = parts[parts.length - 2]; // Get the second-to-last part
  const lowerCaseChildren = children.toLowerCase();
  //highlight active page link
  const conditionalClass =
    currentPage == lowerCaseChildren ? "bg-gray-700" : null;

  return (
    <li
      className={`px-3 py-2 rounded mx-1 my-1  hover:bg-gray-600 ${conditionalClass}`}
    >
      {children}
    </li>
  );
}
