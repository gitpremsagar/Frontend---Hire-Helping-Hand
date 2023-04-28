import Head from "next/head";
import { useEffect, useState } from "react";
import FormElementContainer from "../../components/UI/FormElementContainer";
import ButtonPrimary from "./../../components/UI/ButtonPrimary";
import Section from "./../../components/UI/Section";
import ProposalImageSection from "../../components/sellService/ProposalImageSection";
import RequirmentDetails from "../../components/sellService/RequirmentDetails";
import SetTags from "../../components/sellService/SetTags";
import SetFaqs from "../../components/sellService/setFAQs";
import axios from "axios";
import { envVars } from "../../Services/envVars";
import SetTitle from "../../components/sellService/SetTitle";
import SetDescription from "../../components/sellService/SetDescription";
import SetCost from "../../components/sellService/SetCost";
import SetDeliveryDuration from "../../components/sellService/SetDeliveryDuration";
import SetAdditionalService from "../../components/sellService/SetAdditionalServices";

export default function becomeFreelancer() {
  const [proposal, setProposal] = useState({
    proposalTitle: "",
    proposalDescription: "",
    proposalCost: "",
    proposalDeliveryDuration: "",
    heroImageName: "",
    extraImagesName: [],
    requirements: [],
    tags: [],
    faqs: [],
    extraServices: [
      {
        serviceDescription: "",
        serviceCost: "",
        serviceDuration: "",
      },
    ],
  });

  // logging proposals
  useEffect(() => {
    console.log(proposal);
  }, [proposal]);

  async function postNewProposalToAPI() {
    try {
      const response = await axios(envVars.BACKEND_API_ENDPOINT_FOR_PROPOSALS, {
        method: "POST",
        data: proposal,
        headers: {
          "x-auth-token": "token",
        },
      });
      console.log(response.data);
    } catch (e) {
      alert("Error Occerered: \n" + e.message);
      console.log(e);
    }
  }

  return (
    <div>
      <Head>
        <title>Sell Freelancing Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gray-800 text-white">
          <h1 className="text-center font-bold text-2xl sm:text-6xl p-5 sm:p-20">
            Create New Proposal
          </h1>
        </div>

        <Section className="flex justify-center items-center min-h-screen bg-gray-900">
          <form className="">
            <SetTitle setProposal={setProposal} proposal={proposal} />

            {/* Description */}
            <SetDescription setProposal={setProposal} proposal={proposal} />

            {/* Cost and Delivery Duraion*/}
            <FormElementContainer>
              <div className="grid  grid-cols-1 sm:grid-cols-2 gap-5">
                <SetCost setProposal={setProposal} proposal={proposal} />
                <SetDeliveryDuration
                  setProposal={setProposal}
                  proposal={proposal}
                />
              </div>
            </FormElementContainer>

            <ProposalImageSection
              setProposal={setProposal}
              proposal={proposal}
            />

            <RequirmentDetails setProposal={setProposal} proposal={proposal} />

            <SetTags setProposal={setProposal} proposal={proposal} />

            <SetFaqs setProposal={setProposal} proposal={proposal} />

            <SetAdditionalService
              setProposal={setProposal}
              proposal={proposal}
            />
          </form>
        </Section>
        <div className="flex justify-center bg-gray-800 w-full p-20">
          <ButtonPrimary className={`mr-5`}>Save to Draft</ButtonPrimary>
          <ButtonPrimary onClickHandler={postNewProposalToAPI}>
            Publish
          </ButtonPrimary>
        </div>
      </main>
    </div>
  );
}
