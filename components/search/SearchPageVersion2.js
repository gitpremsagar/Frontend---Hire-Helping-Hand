// this version pushes search form data to url on submit
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ProposalCard from "../components/ProposalCard";

const Search = () => {
  const router = useRouter();
  const { q, location, serviceType } = router.query;

  const [searchTerm, setSearchTerm] = useState(q || "");
  const [searchLocation, setSearchLocation] = useState(location || "any");
  const [searchServiceType, setSearchServiceType] = useState(
    serviceType || "all"
  );
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const { data } = await axios.get(`/api/proposals`, {
          params: {
            q: searchTerm,
            location: searchLocation,
            serviceType: searchServiceType,
          },
        });
        setProposals(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProposals();
  }, [searchTerm, searchLocation, searchServiceType]);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(
      `/search?q=${searchTerm}&location=${searchLocation}&serviceType=${searchServiceType}`
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <form onSubmit={handleSearch} className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Search proposals"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 w-1/2 mr-4"
          />
          <div className="flex-1 mr-4">
            <label htmlFor="location" className="block mb-1 font-medium">
              Location
            </label>
            <select
              id="location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Any</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="serviceType" className="block mb-1 font-medium">
              Service Type
            </label>
            <select
              id="serviceType"
              value={searchServiceType}
              onChange={(e) => setSearchServiceType(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="all">All</option>
              <option value="photography">Photography</option>
              <option value="videography">Videography</option>
              <option value="design">Design</option>
            </select>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4">
          Search
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4">
        {proposals.map((proposal) => (
          <ProposalCard key={proposal.id} proposal={proposal} />
        ))}
      </div>
    </div>
  );
};

export default Search;
