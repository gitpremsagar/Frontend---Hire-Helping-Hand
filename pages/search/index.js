import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SelectMenuOnlineStatus from "../../components/others/Select";
import SelectMenuForCountries from "../../components/others/SelectMenuForCountries";
import SelectOptionsOfServices from "../../components/others/SelectOptionsOfServices";
import SearchResultsForProjects from "../../components/search/projects/SearchResultsForProjects";
import SearchResultsForProposals from "../../components/search/proposals/SearchResultsForProposals";
import SearchInputAutoSuggest from "../../components/search/SearchInputAutoSuggest";
import AsideLeft from "../../components/Theme/AsideLeft/AsideLeft";
import { envVars } from "../../Services/envVars";
import axios from "axios";
import { extractParamsFromURL } from "../../Services/extractParamsFromURL";

export default function SearchPage(props) {
  // console.log("props = ", props);
  const { loggedInUserInfo, isUserFreelancer, setisUserFreelancer } = props;
  const router = useRouter();

  // extracting search term, search location and search service type from url and storing it on respective states
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState("");
  useEffect(() => {
    if (router.query.q) {
      //UPDATING the states only when params or router.query are not undefined
      const { q, searchLocation, searchServiceType } = router.query;
      // console.log("Router = ", router);
      setSearchTerm(q);
      setLocation(searchLocation || "");
      setServiceType(searchServiceType || "");
    }
  }, [router]);

  // fetch proposals from api when requested
  const [proposals, setProposals] = useState([]);
  async function fetchProposals(
    callingSource,
    q,
    searchLocation,
    searchServiceType
  ) {
    console.log("fetchProposals calling source = ", callingSource);
    try {
      // FIXME: build url properly
      const url = `${envVars.BACKEND_API_ENDPOINT_FOR_SEARCHING_PROPOSALS}?q=${q}&searchLocation=${searchLocation}&searchServiceType=${searchServiceType}`;
      console.log("requsting to - ", url);
      const response = await axios.get(url);
      setProposals(response.data); // assuming the response data is an array of proposals
    } catch (error) {
      console.error(error);
    }
  }

  // fetch projects from api when requested
  const [projects, setProjects] = useState([]);
  async function fetchProjects(
    callingSource,
    q,
    searchLocation,
    searchServiceType
  ) {
    console.log("fetchProjects calling source = ", callingSource);
    try {
      // FIXME: build url properly
      const url = `${envVars.BACKEND_API_ENDPOINT_FOR_SEARCHING_PROJECTS}?q=${q}&searchLocation=${searchLocation}&searchServiceType=${searchServiceType}`;
      console.log("requsting to - ", url);
      const response = await axios.get(url);
      setProjects(response.data); // assuming the response data is an array of projects
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearchFormSubmission = (e) => {
    e.preventDefault();
    // UPDATE url whenever search form is submited
    // FIXME: build url properly
    const url = isUserFreelancer
      ? `/search?useHireHelpingHandAs=freelancer&q=${searchTerm}&searchLocation=${location}&searchServiceType=${serviceType}`
      : `/search?q=${searchTerm}&searchLocation=${location}&searchServiceType=${serviceType}`;
    router.push(url);

    isUserFreelancer
      ? fetchProjects("form submission", searchTerm, location, serviceType)
      : fetchProposals("form submission", searchTerm, location, serviceType);
  };

  // fetch search results when page loads for the first time and if search params are present in url
  useEffect(() => {
    console.log("asPath = ", router.asPath);
    const { q, searchLocation, searchServiceType, useHireHelpingHandAs } =
      extractParamsFromURL(router.asPath);
    if (!q) return; //if there is no search term available in url then dont request for search result
    if (useHireHelpingHandAs == "freelancer") {
      //request for projects
      fetchProjects(
        "first time page load",
        q,
        searchLocation,
        searchServiceType
      );
      console.log("mode = freelancer");
    } else {
      // request for proposals
      fetchProposals(
        "first time page load",
        q,
        searchLocation,
        searchServiceType
      );
      console.log("mode = client");
    }
  }, []);

  // console.log("isUserFreelancer = ", isUserFreelancer);

  // fetch search results when freelancer/client mode changes and if search params are present in url
  useEffect(() => {
    if (searchTerm == "") return;
    isUserFreelancer
      ? fetchProjects("mode changed", searchTerm, location, serviceType)
      : fetchProposals("mode changed", searchTerm, location, serviceType);
  }, [isUserFreelancer]);

  return (
    <div className="">
      <Head>
        <title>Search Result</title>
        {/* <meta
          name="description"
          content="Hire helping hand is a platform to hire freelancers"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="lg:grid lg:grid-cols-12">
        <div className="col-span-2">
          <AsideLeft props={props} />
        </div>

        <div className="col-span-10">
          <main className="">
            <form onSubmit={handleSearchFormSubmission} className="mt-20">
              <div className="flex justify-center items-baseline">
                {/* Search Bar with auto suggest functionality */}
                <SearchInputAutoSuggest
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  isUserFreelancer={isUserFreelancer}
                />

                <button
                  type="submit"
                  className="text-white p-2 font-bold border-2 border-gray-900 bg-gray-900"
                >
                  {isUserFreelancer ? `Find Clients` : `Find Freelancers`}
                </button>
              </div>

              <div className="mt-10 flex justify-evenly">
                <SelectMenuForCountries
                  label="Location"
                  location={location}
                  setLocation={setLocation}
                />
                <SelectOptionsOfServices
                  label="Service"
                  serviceType={serviceType}
                  setServiceType={setServiceType}
                />
                <SelectMenuOnlineStatus label="Online status" />
              </div>
            </form>

            <hr />

            {/* Render Search Results */}
            {isUserFreelancer ? (
              <SearchResultsForProjects
                // searchTerm={searchTerm}
                // location={location}
                // serviceType={serviceType}
                projects={projects}
              />
            ) : (
              <SearchResultsForProposals
                // searchTerm={searchTerm}
                // location={location}
                // serviceType={serviceType}
                proposals={proposals}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
