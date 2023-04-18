import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SelectMenuOnlineStatus from "../others/Select";
import SelectMenuForCountries from "../others/SelectMenuForCountries";
import SelectOptionsOfServices from "../others/SelectOptionsOfServices";
import AutoSuggestInput from "../search/AutosuggetInput";

export default function SearchForm(props) {
  const { loggedInUserInfo, isUserFreelancer, setisUserFreelancer } = props;

  const router = useRouter();

  // extracting search term, search location and search service type from url and storing it on respective states
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState("");

  const handleSearchFormSubmission = (e) => {
    e.preventDefault();
    // UPDATE url whenever search form is submited
    // FIXME: build url properly
    const url = isUserFreelancer
      ? `/search?useHireHelpingHandAs=freelancer&q=${searchTerm}&searchLocation=${location}&searchServiceType=${serviceType}`
      : `/search?q=${searchTerm}&searchLocation=${location}&searchServiceType=${serviceType}`;
    router.push(url);
  };
  return (
    <form onSubmit={handleSearchFormSubmission} className="mt-20">
      <div className="flex justify-center items-baseline">
        {/* Search Bar with auto suggest functionality */}
        <AutoSuggestInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isUserFreelancer={isUserFreelancer}
        />

        <button
          type="submit"
          className="text-white p-2 font-bold border-2 border-gray-900 bg-gray-900 min-w-fit"
        >
          {isUserFreelancer ? `Find Clients` : `Find Freelancers`}
        </button>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-evenly">
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
  );
}
