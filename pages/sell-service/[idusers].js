import Head from "next/head";
import BasicPlanFormCard from "./../../components/sellService/basicPlanFormCard";
import SilverPlanFromCard from "./../../components/sellService/silverPlanFormCard";
import GoldPlanFromCard from "./../../components/sellService/goldPlanFormCard";
import InputField from "../../components/sellService/InputField";
import TextareaField from "../../components/sellService/TextareaField";

export default function becomeFreelancer() {
  function handleChange(e) {
    console.log("changed value = ", e.target.value);
  }
  return (
    <div>
      <Head>
        <title>Sell Freelancing Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center font-bold text-6xl text-gray-800 p-20">
          Create new service offer
        </h1>
        <div className="p-20 bg-gray-800 text-white">
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
        <div className="p-5 grid lg:grid-cols-3 gap-5">
          {/* basic */}
          <BasicPlanFormCard handleChange={handleChange} />
          {/* silver */}
          <SilverPlanFromCard handleChange={handleChange} />
          {/* gold */}
          <GoldPlanFromCard handleChange={handleChange} />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
