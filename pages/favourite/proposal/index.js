import Head from "next/head";

import axios from "axios";
import { useEffect, useState } from "react";

import { envVars } from "../../../Services/envVars";
import ProposalCard from "../../../components/proposal-detail/ProposalCard";
import Section from "../../../components/UI/Section";
import AsideLeft__Favourite from "../../../components/favourite/AsideLeft__Favourite";

export default function Home(props) {
  const [proposals, setProposals] = useState([]);

  // TODO: fetch user's favourite proposals
  async function fetchProposals() {
    try {
      const serviceCategory = "web";
      const serviceName = "design";
      const url = `${
        envVars.BACKEND_API_ENDPOINT_FOR_PROPOSALS
      }?category=${encodeURIComponent(
        serviceCategory
      )}&sub_category=${encodeURIComponent(serviceName)}`;
      console.log("requsting to - ", url);
      const response = await axios.get(url);
      setProposals(response.data); // assuming the response data is an array of proposals
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProposals();
  }, []);

  return (
    <div className="">
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Favourite Project</title>
        <meta
          name="description"
          content="Hire Helping Hand is a marketplace connecting freelancers and clients to collaborate on projects. Our platform is designed to simplify the hiring process, making it easy for both parties to find the right match. Join us today to get started!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="lg:grid lg:grid-cols-12 ">
        <div className="col-span-2">
          {/* <AsideLeft {...props} /> */}
          <AsideLeft__Favourite />
        </div>

        <div className="col-span-10">
          <main>
            <Section>
              {proposals.map((proposal, key) => {
                return <ProposalCard {...proposal} key={key} />;
              })}
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}

// FIXME:
// 1. components\login\LoginForm.js
// 2. components\signup\SignupForm.js
// 3. When the backend server is not running the frontend app is getting crashed (while logging in). Fix it by proper error handlling

// TODO: 3. make logout system work
