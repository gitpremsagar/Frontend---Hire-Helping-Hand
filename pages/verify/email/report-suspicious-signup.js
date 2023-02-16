import { useRouter } from "next/router";

export default function ReportSuspiciousSpamer() {
  const router = useRouter();

  //   TODO: send the following to backend server to report spam signup
  const { spamSignupDetectionToken } = router.query;

  return <h1>Spam Signup detection Token = {spamSignupDetectionToken}</h1>;
}
