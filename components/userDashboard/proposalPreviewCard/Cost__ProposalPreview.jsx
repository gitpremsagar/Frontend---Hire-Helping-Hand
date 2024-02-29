import React from "react";

export default function Cost__ProposalPreview({ cost }) {
  return (
    <p className="mb-2 font-bold">
      $ <span className="text-sm md:text-3xl">{cost}</span>
    </p>
  );
}
