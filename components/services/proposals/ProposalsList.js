import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { envVars } from "../../../Services/envVars";
import ProposalCard from "../../proposal-detail/ProposalCard";

function ProposalsList() {
  const router = useRouter();
  const [proposals, setProposals] = useState([]);

  // fetch proposals whenever router changes
  useEffect(() => {
    if (!router.query.serviceName) return; // don't send request to api until router.query.serviceName if defined

    async function fetchProposals() {
      try {
        const { serviceCategory, serviceName } = router.query; //serviceCategory and serviceName coresponds to category and sub_category columns in proposals table
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

    fetchProposals();
  }, [router]);

  return (
    <div className="p-10">
      <h1>Proposal List</h1>

      <ul>
        {proposals.map((proposal, key) => (
          <ProposalCard {...proposal} key={key} />
        ))}
      </ul>
    </div>
  );
}

export default ProposalsList;
