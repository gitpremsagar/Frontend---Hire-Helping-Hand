import Head from "next/head";

import InputField from "../../components/sellService/InputField";
import { useState } from "react";

import axios from "axios";
import { envVars } from "./../../Services/envVars";
import FormElementContainer from "../../components/UI/FormElementContainer";

export default function becomeFreelancer() {
  const proposalInitialValues = {
    proposalTitle: "",

    proposalDescription: "",

    hashTags: "",

    cost: {
      basic: "",
      silver: "",
      gold: "",
    },

    title: {
      basic: "",
      silver: "",
      gold: "",
    },

    description: {
      basic: "",
      silver: "",
      gold: "",
    },

    delivery: {
      basic: "",
      silver: "",
      gold: "",
    },

    addedByFreelancer: [
      {
        name: "",
        valueForBasicPlan: "",
        valueForSilverPlan: "",
        valueForGoldPlan: "",
      },
    ],
  };

  const [proposal, setProposal] = useState(proposalInitialValues);

  const handleProposalChange = (e) => {
    const { name, value } = e.target;
    setProposal({
      ...proposal,
      [name]: value,
    });
  };

  const handleCostChange = (e) => {
    const { name, value } = e.target;
    setProposal({
      ...proposal,
      cost: {
        ...proposal.cost,
        [name]: value,
      },
    });
  };

  const handleDescriptionChange = (e) => {
    const { name, value } = e.target;
    setProposal({
      ...proposal,
      description: {
        ...proposal.description,
        [name]: value,
      },
    });
  };

  const handleProposalSubmit = async (e) => {
    e.preventDefault();
    console.log("Submited Proposal = ", proposal);
    try {
      const response = await axios.post(
        envVars.BACKEND_API_ENDPOINT_FOR_PROPOSALS,
        proposal
      );
      console.log("Proposal posting response = ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Sell Freelancing Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gray-800 text-white">
          <h1 className="text-center font-bold text-6xl p-20">
            Create New Proposal
          </h1>
        </div>

        <section className="flex justify-center items-center min-h-screen bg-gray-900">
          <form className="min-w-[1200px]">
            <FormElementContainer>
              <label
                htmlFor="proposalTitle"
                className="block text-white text-2xl mb-6"
              >
                Proposal Title
              </label>
              <input
                name="proposalTitle"
                id="proposalTitle"
                type="text"
                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 border-2 border-blue-500"
              />
            </FormElementContainer>

            <FormElementContainer>
              <label
                htmlFor="proposalDescription"
                className="block text-white text-2xl mb-6"
              >
                Proposal Description
              </label>
              <textarea
                name="proposalDescription"
                rows={10}
                id="proposalDescription"
                type="text"
                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 border-2 border-blue-500"
              />
            </FormElementContainer>

            <FormElementContainer>
              <label
                htmlFor="additionalService_1"
                className="block text-white text-2xl mb-6"
              >
                Add More Facility
              </label>
              <input
                name="additionalService_1"
                id="additionalService_1"
                type="text"
                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 border-2 border-blue-500"
              />
            </FormElementContainer>
          </form>
        </section>
      </main>
    </div>
  );
}
