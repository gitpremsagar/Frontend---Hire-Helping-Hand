import React from "react";
import H6 from "../UI/H6";
import CloseIcon from "@mui/icons-material/Close";

export default function FAQ({ faq, index, deleteFaq }) {
  return (
    <div key={index}>
      <H6>{faq.question}</H6>
      <p>{faq.answer}</p>
      <span
        onClick={() => {
          deleteFaq(index);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
}
