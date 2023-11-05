import Head from "next/head";
import HeroSection from "../components/HeroSection/HeroSection";
import ProposalCard from "../components/proposal-detail/ProposalCard";
import AsideLeft from "./../components/Theme/AsideLeft/AsideLeft";
import { envVars } from "../Services/envVars";
import axios from "axios";
import { useEffect, useState } from "react";
import Section from "../components/UI/Section";
import AsideLeftNew from "../components/Theme/AsideLeft/AsideLeftNew";
import H2 from "../components/UI/H2";
import KeyFeaturesCard from "../components/homepage/KeyFeaturesCard";
import H3 from "../components/UI/H3";

export default function Home(props) {
  const [proposals, setProposals] = useState([]);

  // TODO: fetch proposals from all categories and show it on home page
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
        <title>
          Hire Helping Hand - Marketplace for Freelancers and Clients
        </title>
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
          <AsideLeftNew />
        </div>

        <div className="col-span-10">
          <main>
            <HeroSection {...props} />

            {/* Key Features Section */}
            <Section>
              <H2>
                Why <span className="underline">Hire Helping Hand</span>?
              </H2>
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-4 mt-10">
                <KeyFeaturesCard className={`bg-red-400`}>
                  Flat 3% commision
                </KeyFeaturesCard>
                <KeyFeaturesCard className={`bg-green-400`}>
                  Simplified Hiring
                </KeyFeaturesCard>
                <KeyFeaturesCard className={`bg-blue-400`}>
                  Secure Payments
                </KeyFeaturesCard>
                <KeyFeaturesCard className={`bg-yellow-400`}>
                  Robust Review System
                </KeyFeaturesCard>
              </div>
            </Section>

            {/* Featured proposals section */}
            <Section>
              <H3>Featured Proposals</H3>
              <div className="mt-10">
                {proposals.map((proposal, key) => {
                  return <ProposalCard {...proposal} key={key} />;
                })}
              </div>
            </Section>

            {/* TODO: show - Featured Jobs section */}
            <Section>
              <H3>Featured Jobs</H3>
              <div className="mt-10">
                {proposals.map((proposal, key) => {
                  return <ProposalCard {...proposal} key={key} />;
                })}
              </div>
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
