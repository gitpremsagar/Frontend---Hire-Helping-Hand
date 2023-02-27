import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SelectMenuOnlineStatus from "../others/Select";
import SelectMenuForCountries from "../others/SelectMenuForCountries";
import SelectOptionsOfServices from "../others/SelectOptionsOfServices";

export default function SearchForm() {
  const [formData, setformData] = useState([]);

  const router = useRouter();

  // set `isUserFreelancer` state based on `useHireHelpingHandAs` param value in url
  const [isUserFreelancer, setisUserFreelancer] = useState(false);
  useEffect(() => {
    const { query } = router;
    const useHireHelpingHandAs = query.useHireHelpingHandAs || "client"; //Note that we're also setting a default value of client for the `useHireHelpingHand` parameter in case it's not present in the URL. This ensures that our code doesn't break if the parameter is not provided.
    setisUserFreelancer(useHireHelpingHandAs === "freelancer");
  }, [router]);

  function handleSearchTermSubmit(e) {
    e.preventDefault();
    console.log("search form submitted!");
  }
  return (
    <form onSubmit={handleSearchTermSubmit} className="mt-20">
      <div className="flex items-center justify-center">
        <input
          name="searchTerm"
          type="text"
          placeholder={
            isUserFreelancer ? `search for projects` : `search for proposals`
          }
          className="min-w-[600px] text-gray-900 border-2 border-gray-900 p-2"
        />
        <button
          type="submit"
          className="text-white p-2 font-bold border-2 border-gray-900 bg-gray-900"
        >
          {isUserFreelancer ? `Find Projects` : `Find Freelancer`}
        </button>
      </div>

      <div className="mt-10 flex justify-evenly">
        <SelectMenuForCountries label="Location" />
        <SelectOptionsOfServices label="Service" />
        <SelectMenuOnlineStatus label="Online status" />
      </div>
    </form>
  );
}
