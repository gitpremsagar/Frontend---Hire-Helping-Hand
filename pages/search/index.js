import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SelectMenuOnlineStatus from "../../components/others/Select";
import SelectMenuForCountries from "../../components/others/SelectMenuForCountries";
import SelectOptionsOfServices from "../../components/others/SelectOptionsOfServices";
import SearchInputAutoSuggest from "../../components/search/SearchInputAutoSuggest";
import AsideLeft from "../../components/Theme/AsideLeft/AsideLeft";

export default function Home(props) {
  const router = useRouter();

  // set `isUserFreelancer` state based on `useHireHelpingHandAs` param value in url
  const [isUserFreelancer, setisUserFreelancer] = useState(false);
  useEffect(() => {
    const { query } = router;
    const useHireHelpingHandAs = query.useHireHelpingHandAs || "client"; //Note that we're also setting a default value of client for the `useHireHelpingHand` parameter in case it's not present in the URL. This ensures that our code doesn't break if the parameter is not provided.
    setisUserFreelancer(useHireHelpingHandAs === "freelancer");
  }, [router]);

  // extracting search term, search location and search service type from url and storing it on respective states
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState("");
  useEffect(() => {
    if (router.query.q) {
      //UPDATING the states only when params or router.query are not undefined
      const { q, searchLocation, searchServiceType } = router.query;
      console.log("Router = ", router);
      setSearchTerm(q);
      setLocation(searchLocation || "");
      setServiceType(searchServiceType || "");
    }
  }, [router]);

  // request search result from backend whenever URL is UPDATED by search form submission
  useEffect(() => {
    console.log("requesting for search result!");
  }, [router]);

  const handleSearchFormSubmission = (e) => {
    e.preventDefault();
    // UPDATE url whenever search form is submited
    const url = isUserFreelancer
      ? `/search?useHireHelpingHandAs=freelancer&q=${searchTerm}&searchLocation=${location}&searchServiceType=${serviceType}`
      : `/search?q=${searchTerm}&searchLocation=${location}&searchServiceType=${serviceType}`;
    router.push(url);
  };

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
          <AsideLeft />
        </div>

        <div className="col-span-10">
          <main className="">
            <form onSubmit={handleSearchFormSubmission} className="mt-20">
              <div className="flex justify-center items-baseline">
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
            <section className="p-4">
              <h1 className="text-4xl">Search Results</h1>
              <div>here will be the cards</div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
