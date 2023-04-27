import React from "react";
import ImageBox from "./ImageBox";
import HeroImageBox from "./HeroImageBox";

export default function ProposalImageSection({ proposal, setProposal }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      <HeroImageBox proposal={proposal} setProposal={setProposal} />
      <ImageBox />
      <ImageBox />
      <ImageBox />
    </div>
  );
}
