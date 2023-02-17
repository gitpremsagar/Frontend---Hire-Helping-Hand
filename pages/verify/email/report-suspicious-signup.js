import { useRouter } from "next/router";
import { envVars } from "../../../Services/envVars";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ReportSuspiciousSpamer() {
  const router = useRouter();
  const { spamSignupDetectionToken } = router.query;
  const [reportingStatus, setreportingStatus] = useState(
    "Please wait while reporting!"
  );

  useEffect(() => {
    // sending the token to backend to report the user account with this token as spam account
    if (spamSignupDetectionToken) {
      const url = `${envVars.BACKEND_API_ENDPOINT_FOR_REPORTING_SPAM_SIGNUP}?spamSignupDetectionToken=${spamSignupDetectionToken}`;
      axios
        .get(url)
        .then((response) => {
          const thankyouNote = `Thank you for reporting!`;
          setreportingStatus(thankyouNote);
          console.log(response);
        })
        .catch((error) => console.error(error));
    }
  }, [spamSignupDetectionToken]);
  // TODO: design this page propoerly.
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">{reportingStatus}</h1>
      <p className="text-lg mb-8">
        We take spam signups seriously and appreciate your help.
      </p>
      <Link href="/">
        <a className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
          Go back to home page
        </a>
      </Link>
    </div>
  );
}
// TODO: remove all console logs
