import React from "react";
import H6 from "../UI/H6";
import CloseIcon from "@mui/icons-material/Close";

export default function FAQ({ faq, index, deleteFaq }) {
  return (
    <div
      className="p-5 border-2 rounded-sm flex justify-between mb-2"
      key={index}
    >
      <div>
        <H6>Question : {faq.question}</H6>
        <p>Answer : {faq.answer}</p>
      </div>
      <div>
        <span
          onClick={() => {
            deleteFaq(index);
          }}
        >
          {/* <CloseIcon /> */}
          {/* delete svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
