import Head from "next/head";
import BasicPlanFormCard from "./../../components/sellService/basicPlanFormCard";
import SilverPlanFromCard from "./../../components/sellService/silverPlanFormCard";
import GoldPlanFromCard from "./../../components/sellService/goldPlanFormCard";

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
        <h1 className="text-center font-bold text-4xl mt-10">
          Create new service offer
        </h1>
        <div className="p-5 grid grid-cols-3 gap-5">
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
