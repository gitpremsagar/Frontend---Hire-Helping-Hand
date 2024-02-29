import Head from "next/head";
import { useRouter } from "next/router";
import AsideLeftOfDashboard from "../../../../components/userDashboard/AsideLeftOfDashboard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { BACKEND_API_ENDPOINT_FOR_GETTING_ACTIVE_PROPOSALS_BY_FREELANCER_ID } from "../../../../Services/envVars";
import Section from "../../../../components/UI/Section";
import H3 from "../../../../components/UI/H3";
import ProposalCard from "../../../../components/proposal-detail/ProposalCard";
import { Skeleton } from "@mui/material";
export default function OngoingProjectsPage(props) {
  const router = useRouter();

  const [activeProposals, setActiveProposals] = useState([]);
  const [isLoading, setIsLoaading] = useState(false);

  // get userID from the redux store
  const freelancerID = useSelector((state) => state.authSlice.userid);

  useEffect(async () => {
    //don't make request if freelancers id is not yet fetched from redux store
    if (freelancerID === null) return;

    setIsLoaading(true);
    try {
      const response = await axios.get(
        `${BACKEND_API_ENDPOINT_FOR_GETTING_ACTIVE_PROPOSALS_BY_FREELANCER_ID}/${freelancerID}`
      );
      setActiveProposals(response.data);
      setIsLoaading(false);
    } catch (error) {
      console.log("Error in fetching active proposals = ", error.message);
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
              <H3>List of all your active proposals:</H3>
              {isLoading ? (
                <div className="min-h-screen flex flex-col gap-10">
                  <Skeleton
                    animation="pulse"
                    variant="rectangular"
                    width={800}
                    height={400}
                  />
                  <Skeleton
                    animation="pulse"
                    variant="rectangular"
                    width={800}
                    height={400}
                  />
                  <Skeleton
                    animation="pulse"
                    variant="rectangular"
                    width={800}
                    height={400}
                  />
                </div>
              ) : (
                <div>
                  {activeProposals.map((proposal, index) => {
                    return <ProposalCard {...proposal} key={index} />;
                  })}
                </div>
              )}
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}
