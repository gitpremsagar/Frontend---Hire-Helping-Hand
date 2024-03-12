import React from "react";
import ImageBox from "./ImageBox";
import HeroImageBox from "./HeroImageBox";
import Section from "../UI/Section";
import H2 from "../UI/H2";
import UploadImageButton from "./UploadImageButton";

export default function ProposalImageSection({ proposal, setProposal }) {
  return (
    <Section>
      <H2 className={`text-white mb-10`}>Upload thumbnails</H2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <HeroImageBox proposal={proposal} setProposal={setProposal} />

        {/* render extra images */}
        {proposal.extraImagesName.map((extraImage, index) => {
          return <ImageBox key={index} imageName={extraImage} />;
        })}

        <UploadImageButton />
      </div>
    </Section>
  );
}
