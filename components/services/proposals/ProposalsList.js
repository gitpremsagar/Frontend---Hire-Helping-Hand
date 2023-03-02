import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { envVars } from "../../../Services/envVars";

function ProposalsList() {
  const router = useRouter();
  const [proposals, setProposals] = useState([]);

  // fetch proposals whenever router changes
  useEffect(() => {
    if (!router.query.serviceName) return; // don't send request to api until router.query.serviceName if defined
    async function fetchProposals() {
      try {
        const { serviceCategory, serviceName } = router.query; //serviceCategory and serviceName coresponds to category and sub_category columns in proposals table
        const url = `${envVars.BACKEND_API_ENDPOINT_FOR_PROPOSALS}?category=${serviceCategory}&sub_category=${serviceName}`;
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
    <div>
      <h1>Proposal List</h1>
      <ul>
        {proposals.map((proposal) => (
          <li key={proposal.id}>
            <h2>{proposal.title}</h2>
            <p>{proposal.description}</p>
            <p>Category: {proposal.category}</p>
            <p>Subcategory: {proposal.sub_category}</p>
            {/* ... */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProposalsList;
