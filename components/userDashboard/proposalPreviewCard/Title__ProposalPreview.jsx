import Link from "next/link";
import React from "react";

export default function Title__ProposalPreview({ title, proposal_id }) {
  return (
    <Link href={`/proposal-detail/${proposal_id}`}>
      <a>
        <h3 className="text-xs font-semibold cursor-pointer text-blue-600 hover:text-blue-500">
          {title}
        </h3>
      </a>
    </Link>
  );
}
