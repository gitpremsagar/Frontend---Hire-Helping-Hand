import Head from "next/head";

import InputField from "../../components/sellService/InputField";
import TextareaField from "../../components/sellService/TextareaField";
import { useState } from "react";
import { useFormik } from "formik";
import CellOfSideHeadingForAllPlans from "./../../components/sellService/CellOfSideHeadingForAllPlans";
import CellOfBasicPlan from "./../../components/sellService/CellOfBasicPlan";
import CellOfSilverPlan from "./../../components/sellService/CellOfSilverPlan";
import CellOfGoldPlan from "./../../components/sellService/CellOfGoldPlan";
import RowOfPlans from "../../components/sellService/RowOfPlans";
import { InputAdornment, OutlinedInput } from "@mui/material";
import axios from "axios";
import { envVars } from "./../../Services/envVars";

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
        <form onSubmit={handleProposalSubmit}>
          <div className="p-20 bg-gray-900 text-white">
            <InputField
              type="text"
              label="Title for the freelancing service you provide"
              name="proposalTitle"
              placeholder="Main Title..."
              lableClass=""
              value={proposal.proposalTitle}
              onChangeHandler={handleProposalChange}
            />
            <TextareaField
              type="text"
              label="Detailed description of the service that you offer"
              name="proposalDescription"
              placeholder="Detailed service description..."
              value={proposal.proposalDescription}
              onChangeHandler={handleProposalChange}
            />
            <InputField
              type="text"
              label="Add hashtags"
              name="hashTags"
              placeholder="#hashTags..."
              value={proposal.hashTags}
              onChangeHandler={handleProposalChange}
            />
          </div>
          {/* three plans container */}
          <div className="">
            <div className="grid lg:grid-cols-4 ">
              <CellOfSideHeadingForAllPlans>
                <h3 className="font-semibold">Describe Each Plan</h3>
              </CellOfSideHeadingForAllPlans>

              <CellOfBasicPlan>
                <h3 className="font-semibold text-center text-2xl">Basic</h3>
              </CellOfBasicPlan>

              <CellOfSilverPlan>
                <h3 className="font-semibold text-center text-2xl">Silver</h3>
              </CellOfSilverPlan>

              <CellOfGoldPlan>
                <h3 className="font-semibold text-center text-2xl">Gold</h3>
              </CellOfGoldPlan>
            </div>

            {/* Plan Description Row */}
            <RowOfPlans
              rowSideHeading="Short Description"
              inputType="text"
              onChangeHandler={() =>
                console.log("Description Change triggered!")
              }
            />

            {/* Plan Cost Row */}
            <RowOfPlans
              rowSideHeading="Cost"
              inputType="number"
              onChangeHandler={handleCostChange}
            />

            {/* Delivery Details row */}
            <div className="grid lg:grid-cols-4 border-b-2 border-gray-800">
              <CellOfSideHeadingForAllPlans>
                <h3 className="font-semibold">Delivery (in Days)</h3>
              </CellOfSideHeadingForAllPlans>

              <CellOfBasicPlan>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">Day(s)</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "days",
                    max: "5",
                    min: "1",
                  }}
                  type="number"
                  className="w-full"
                />
              </CellOfBasicPlan>

              <CellOfSilverPlan>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">Day(s)</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "days",
                    max: "5",
                    min: "1",
                  }}
                  type="number"
                />
              </CellOfSilverPlan>

              <CellOfGoldPlan>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">Day(s)</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "days",
                    max: "5",
                    min: "1",
                  }}
                  type="number"
                />
              </CellOfGoldPlan>
            </div>
          </div>
          <div className="px-20 py-10 bg-gray-800 text-white flex justify-end items-center">
            <button className="border-2 border-white rounded-full px-3 py-2 mr-2">
              Save to Drafts
            </button>{" "}
            <button
              className="bg-blue-400 rounded-full px-4 py-3 "
              type="submit"
            >
              Publish
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
