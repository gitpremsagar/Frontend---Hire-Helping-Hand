// this version does not push search form data to url
import { useState, useEffect } from "react";
import axios from "axios";
import ProposalCard from "../proposal-detail/ProposalCard";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("all");
  const [serviceType, setServiceType] = useState("all");
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const response = await axios.get("/api/proposals", {
          params: { searchTerm, location, serviceType },
        });
        //setProposals(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProposals();
  }, [searchTerm, location, serviceType]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Search Proposals</h1>
      <form className="flex flex-col md:flex-row md:space-x-4">
        <input
          type="text"
          placeholder="Search term"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="w-full md:w-1/3 border rounded-md px-3 py-2 mb-4"
        />
        <select
          name="location"
          value={location}
          onChange={handleLocationChange}
          className="w-full md:w-1/3 border rounded-md px-3 py-2 mb-4"
        >
          <option value="all">All Locations</option>
          <option value="new-york">New York</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="chicago">Chicago</option>
        </select>
        <select
          name="serviceType"
          value={serviceType}
          onChange={handleServiceTypeChange}
          className="w-full md:w-1/3 border rounded-md px-3 py-2 mb-4"
        >
          <option value="all">All Service Types</option>
          <option value="design">Design</option>
          <option value="development">Development</option>
          <option value="marketing">Marketing</option>
        </select>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {proposals.map((proposal) => (
          <ProposalCard key={proposal.id} proposal={proposal} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
