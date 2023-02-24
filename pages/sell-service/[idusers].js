import Head from "next/head";
import BasicPlanFormCard from "./../../components/sellService/basicPlanFormCard";
import SilverPlanFromCard from "./../../components/sellService/silverPlanFormCard";
import GoldPlanFromCard from "./../../components/sellService/goldPlanFormCard";
import InputField from "../../components/sellService/InputField";
import TextareaField from "../../components/sellService/TextareaField";
import { useState } from "react";

export default function becomeFreelancer() {
  const [extraOptions, setextraOptions] = useState([
    "first extra option",
    "second",
    "third",
  ]);
  function addMoreOptions() {
    setextraOptions((preItem) => {
      return [...preItem, "new item"];
    });
  }

  const [textValue, setTextvalue] = useState("");

  function handleChange(e) {
    console.log("changed value = ", e.target.value);
    setTextvalue((prevVal) => {
      return prevVal + "s";
    });
  }
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

        <div className="p-20 bg-gray-900 text-white">
          <InputField
            type="text"
            label="Title for the freelancing service you provide"
            name="serviceTitleMain"
            placeholder="Main Title..."
            lableClass=""
          />
          <TextareaField
            type="text"
            label="Detailed description of the service that you offer"
            name="serviceDetailedDescription"
            placeholder="Detailed service description..."
          />
          <InputField
            type="text"
            label="Add hashtags"
            name="hashTags"
            placeholder="#hashTags..."
          />
        </div>
        <div className="p-5 grid lg:grid-cols-3 gap-5 ">
          {/* basic */}
          <BasicPlanFormCard
            handleChange={handleChange}
            extraOptions={extraOptions}
            addMoreOptions={addMoreOptions}
            textValue={textValue}
          />
          {/* silver */}
          <SilverPlanFromCard handleChange={handleChange} />
          {/* gold */}
          <GoldPlanFromCard handleChange={handleChange} />
        </div>
        <div className="px-20 py-10 bg-gray-800 text-white flex justify-end items-center">
          <button className="border-2 border-white rounded-full px-3 py-2 mr-2">
            Save to Drafts
          </button>{" "}
          <button className="bg-blue-400 rounded-full px-4 py-3 ">
            Publish
          </button>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
