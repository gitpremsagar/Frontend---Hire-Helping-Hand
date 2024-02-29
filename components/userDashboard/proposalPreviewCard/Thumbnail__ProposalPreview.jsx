import Image from "next/image";
import React from "react";

export default function Thumbnail__ProposalPreview() {
  return (
    <div>
      <Image
        width={100}
        height={100}
        src={`/dummy-proposal-thumbnail/dummy-proposal-thumbnail.png`}
        alt="Proposal Preview Thumbnail"
        layout="responsive"
        priority={false}
      />
    </div>
  );
}
