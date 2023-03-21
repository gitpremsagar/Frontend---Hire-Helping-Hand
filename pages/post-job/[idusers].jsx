import Head from "next/head";
import BasicPlanFormCard from "../../components/sellService/basicPlanFormCard";
import SilverPlanFromCard from "../../components/sellService/silverPlanFormCard";
import GoldPlanFromCard from "../../components/sellService/goldPlanFormCard";
import InputField from "../../components/sellService/InputField";
import TextareaField from "../../components/sellService/TextareaField";
import { useState } from "react";
import axios from "axios";

export default function becomeFreelancer() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleProposalSubmit = async (event) => {
    event.preventDefault();

    console.log("Proposal form data = ", formData);
    // submit the proposal form
    // try {
    //   const response = await axios.post("/api/submit-form", formData);
    //   console.log("Form submitted successfully", response.data);
    // } catch (error) {
    //   console.error("Error submitting form", error);
    // }
  };
  return (
    <div>
      <Head>
        <title>Post a job</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gray-800 text-white">
          <h1 className="text-center font-bold text-6xl p-20">
            Create New Project
          </h1>
        </div>

        <form method="POST" action="" onSubmit={handleProposalSubmit}>
          <div className="p-20 bg-gray-900 text-white">
            {/* proposalTitle */}
            <InputField
              type="text"
              label="Title for the freelancing service you provide"
              name="proposalTitle"
              placeholder="Main Title..."
              lableClass=""
              onChangeHandler={handleInputChange}
            />
            <TextareaField
              type="text"
              label="Detailed description of the service that you offer"
              name="proposalDescription"
              placeholder="Detailed service description..."
              onChangeHandler={handleInputChange}
            />
            <InputField
              type="text"
              label="Add hashtags"
              name="hashTags"
              placeholder="#hashTags..."
              onChangeHandler={handleInputChange}
            />
          </div>
          <div className="p-5 grid lg:grid-cols-3 gap-5 ">
            {/* basic */}
            <BasicPlanFormCard Input={handleInputChange} />
            {/* silver */}
            <SilverPlanFromCard handleChange={handleInputChange} />
            {/* gold */}
            <GoldPlanFromCard handleChange={handleInputChange} />
          </div>
          <div className="px-20 py-10 bg-gray-800 text-white flex justify-end items-center">
            <button className="border-2 border-white rounded-full px-3 py-2 mr-2">
              Save to Drafts
            </button>{" "}
            <button
              className="bg-blue-400 rounded-full px-4 py-3"
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
