import Head from "next/head";
import BasicPlanFormCard from "./../../components/sellService/basicPlanFormCard";
import SilverPlanFromCard from "./../../components/sellService/silverPlanFormCard";
import GoldPlanFromCard from "./../../components/sellService/goldPlanFormCard";
import InputField from "../../components/sellService/InputField";
import TextareaField from "../../components/sellService/TextareaField";
import { useState } from "react";
import { useFormik } from "formik";
import CellOfSideHeadingForAllPlans from "./../../components/sellService/CellOfSideHeadingForAllPlans";
import CellOfBasicPlan from "./../../components/sellService/CellOfBasicPlan";
import CellOfSilverPlan from "./../../components/sellService/CellOfSilverPlan";
import CellOfGoldPlan from "./../../components/sellService/CellOfGoldPlan";
import RowOfPlans from "../../components/sellService/RowOfPlans";

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

  const initialValues = {
    proposalTitle: "",
    proposalDescription: "",
    basicPlanTitle: "",
    basicPlanDescription: "",
    basicPlanPlanPrice: "",
    basicPlanDeliveryDuration: "",
    silverPlanTitle: "",
    silverPlanDescription: "",
    silverPlanPlanPrice: "",
    silverPlanDeliveryDuration: "",
    goldPlanTitle: "",
    goldPlanDescription: "",
    goldPlanPlanPrice: "",
    goldPlanDeliveryDuration: "",
    hashTags: "",
  };

  const Formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("Proposal form Values = ", values);
    },
  });

  const [textValue, setTextvalue] = useState("");

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
        <form onSubmit={Formik.handleSubmit}>
          <div className="p-20 bg-gray-900 text-white">
            <InputField
              type="text"
              label="Title for the freelancing service you provide"
              name="proposalTitle"
              placeholder="Main Title..."
              lableClass=""
              value={Formik.values.proposalTitle}
              onChangeHandler={Formik.handleChange}
            />
            <TextareaField
              type="text"
              label="Detailed description of the service that you offer"
              name="proposalDescription"
              placeholder="Detailed service description..."
              value={Formik.values.proposalDescription}
              onChangeHandler={Formik.handleChange}
            />
            <InputField
              type="text"
              label="Add hashtags"
              name="hashTags"
              placeholder="#hashTags..."
              value={Formik.values.hashTags}
              onChangeHandler={Formik.handleChange}
            />
          </div>
          {/* three plans container */}
          <div className="">
            <div className="grid lg:grid-cols-4 ">
              <CellOfSideHeadingForAllPlans>
                <h3 className="font-semibold">Describe Each Plan</h3>
              </CellOfSideHeadingForAllPlans>

              <CellOfBasicPlan>
                <h3 className="font-semibold">Basic</h3>
              </CellOfBasicPlan>

              <CellOfSilverPlan>
                <h3 className="font-semibold">Silver</h3>
              </CellOfSilverPlan>

              <CellOfGoldPlan>
                <h3 className="font-semibold">Gold</h3>
              </CellOfGoldPlan>
            </div>
            <RowOfPlans />
            <RowOfPlans />
            <RowOfPlans />
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
