import React from "react";
import Section from "../../UI/Section";
import H3 from "../../UI/H3";
import H4 from "../../UI/H4";
import H6 from "./../../UI/H6";
import ButtonPrimary from "../../UI/ButtonPrimary";

export default function HowItWorksSection() {
  return (
    <Section>
      {/* TODO:  Provide a step-by-step guide or infographic explaining the process of using your platform, from posting a job to hiring a freelancer.*/}
      <H3>How it work?</H3>
      <H4>You can hire someone in 2 ways:</H4>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-blue-200 p-6 rounded">
          <div className="mb-5">
            <H6>First Way</H6>
            Either post a job which will create a "project" on our platform on
            which freelancers can bid. You get to decide which bid to accept and
            handover the job.
          </div>
          <ButtonPrimary className={`float-right`}>Post s job</ButtonPrimary>
        </div>
        <div className="bg-green-200 p-6 rounded">
          <div className="mb-5">
            <H6>Second Way</H6>
            Or order from many predefined services called as "proposals" which
            are provided by freelancers listed on our platform.
          </div>
          <ButtonPrimary className={`float-right`}>
            Browse proposals
          </ButtonPrimary>
        </div>
      </div>
    </Section>
  );
}
