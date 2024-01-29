import Head from "next/head";
import { useRouter } from "next/router";
import AsideLeftOfDashboard from "../../../../components/userDashboard/AsideLeftOfDashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BACKEND_API_ENDPOINT_FOR_GETTING_DRAFT_PROPOSALS_BY_FREELANCER_ID,
  BACKEND_API_ENDPOINT_FOR_GETTING_PROPOSALS_BY_FREELANCER_ID,
} from "../../../../Services/envVars";
import H3 from "./../../../../components/UI/H3";
import { useSelector } from "react-redux";
import ProposalCard from "./../../../../components/proposal-detail/ProposalCard";
import Section from "../../../../components/UI/Section";
export default function OngoingProjectsPage(props) {
  const router = useRouter();

  const [proposals, setProposals] = useState([]);

  // get freelancerID from redux store
  const freelancerID = useSelector((state) => state.authSlice.userid);

  //get list of proposals careted by this freelancer and render it
  useEffect(async () => {
    //if freelancer's id has not yet been available then return
    if (freelancerID === null) return;

    try {
      const response = await axios.get(
        `${BACKEND_API_ENDPOINT_FOR_GETTING_DRAFT_PROPOSALS_BY_FREELANCER_ID}/${freelancerID}`
      );
      setProposals(response.data);
    } catch (error) {
      console.log(
        "error in fetching draft proposals by freelancer id = ",
        error.message
      );
    }
  }, [freelancerID]);

  return (
    <div className="">
      <Head>
        <title>Dashboard</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="lg:grid lg:grid-cols-12">
        <div className="col-span-2">
          <AsideLeftOfDashboard />
        </div>

        <div className="col-span-10">
          <main className="">
            <Section>
              <H3>Following is the list of proposals created by you:</H3>
              {proposals.map((proposal, index) => {
                return <ProposalCard {...proposal} key={index} />;
              })}
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}
