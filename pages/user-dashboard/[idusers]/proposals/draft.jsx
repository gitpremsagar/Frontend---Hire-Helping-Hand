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
import { Skeleton } from "@mui/material";
import Card__ProposalPreview from "../../../../components/userDashboard/proposalPreviewCard/Card__ProposalPreview.jsx";
export default function OngoingProjectsPage(props) {
  const router = useRouter();

  const [proposals, setProposals] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // get freelancerID from redux store
  const freelancerID = useSelector((state) => state.authSlice.userid);

  //get list of draft proposals careted by this freelancer and render it
  useEffect(async () => {
    //if freelancer's id has not yet been available then return
    if (freelancerID === null) return;

    setIsLoading(true);

    try {
      const response = await axios.get(
        `${BACKEND_API_ENDPOINT_FOR_GETTING_DRAFT_PROPOSALS_BY_FREELANCER_ID}/${freelancerID}`
      );
      setProposals(response.data);
      console.log("draft proposals = ", response.data);
      setIsLoading(false);
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
              <H3>Draft proposals created by you:</H3>
              {isLoading ? (
                <div className="min-h-screen flex flex-col gap-10">
                  <Skeleton
                    animation="pulse"
                    variant="rectangular"
                    width={800}
                    height={200}
                  />
                  <Skeleton
                    animation="pulse"
                    variant="rectangular"
                    width={800}
                    height={200}
                  />
                  <Skeleton
                    animation="pulse"
                    variant="rectangular"
                    width={800}
                    height={200}
                  />
                </div>
              ) : (
                <div>
                  {/* render proposals only if available */}
                  {proposals.length > 0 ? (
                    <div className="">
                      {proposals.map((proposal) => (
                        <Card__ProposalPreview
                          key={proposal.id}
                          {...proposal}
                        />
                      ))}
                    </div>
                  ) : (
                    <H3 className={`text-center text-green-600`}>
                      You do not have any proposal saved as draft
                    </H3>
                  )}
                </div>
              )}
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}
