import Link from "next/link";
import { useRouter } from "next/router";
import {
  BellIconSVG,
  BriefcaseIcon,
  ChatAltIcon,
  CloudeUploadIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
} from "../../svg/heroicons";
import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";
import { useEffect, useState } from "react";

export default function Navbar(props) {
  const { loggedInUserInfo } = props;

  const router = useRouter();
  const [currentPathname, setcurrentPathname] = useState("/");
  const [currentPathNameForClientMode, setcurrentPathNameForClientMode] =
    useState("/");
  const [
    currentPathNameForFreelancerMode,
    setcurrentPathNameForFreelancerMode,
  ] = useState("/");

  // get current pathname and store it in the state
  useEffect(() => {
    // const pathName = router.asPath.split("?")[0]; //extrcting pathName from asPath of router
    const pathName = router.asPath;

    setcurrentPathname(pathName);

    // build currentPathnameForClientMode
    const url = new URL(pathName, "https://example.com");
    url.searchParams.delete("useHireHelpingHandAs"); // remove useHireHelpingHandAs query parameter
    const crntPathnameForClientMode = url.pathname + url.search; //  the updated current pathname for client mode
    setcurrentPathNameForClientMode(crntPathnameForClientMode);
    console.log(crntPathnameForClientMode);

    // build currentPathnameForFreelancerMode
    const url2 = new URL(pathName, "https://example.com");
    url2.searchParams.set("useHireHelpingHandAs", "freelancer"); // add useHireHelpingHandAs query parameter
    const crntPathnameForFreelancerMode = url2.pathname + url2.search; //  the updated current pathname for freelancer mode
    setcurrentPathNameForFreelancerMode(crntPathnameForFreelancerMode);
    console.log(crntPathnameForFreelancerMode);
  }, [router]);

  // set `isUserFreelancer` state based on `useHireHelpingHandAs` param value in url
  const [isUserFreelancer, setisUserFreelancer] = useState(false);
  useEffect(() => {
    const { query } = router;
    const useHireHelpingHandAs = query.useHireHelpingHandAs || "client"; //Note that we're also setting a default value of client for the `useHireHelpingHand` parameter in case it's not present in the URL. This ensures that our code doesn't break if the parameter is not provided.
    setisUserFreelancer(useHireHelpingHandAs === "freelancer");
  }, [router]);

  return (
    <nav className="">
      <ul className="flex p-5 bg-gray-900 text-white justify-between items-center">
        {/* left side item */}
        <span className="flex items-center gap-10">
          <li className="font-bold">
            <Link
              href={
                isUserFreelancer ? `/?useHireHelpingHandAs=freelancer` : `/`
              }
            >
              H-H-H
            </Link>
          </li>
          <li>
            I'm a{" "}
            <Link href={`${currentPathNameForFreelancerMode}`}>
              <a
                className={
                  isUserFreelancer
                    ? "cursor-pointer text-blue-400"
                    : "cursor-pointer line-through text-red-600 hover:no-underline hover:text-blue-400"
                }
              >
                Freelancer
              </a>
            </Link>{" "}
            /{" "}
            <Link href={`${currentPathNameForClientMode}`}>
              <a
                className={
                  isUserFreelancer
                    ? "cursor-pointer line-through text-red-600 hover:no-underline hover:text-blue-400"
                    : "cursor-pointer text-blue-400"
                }
              >
                Client
              </a>
            </Link>
          </li>
          {isUserFreelancer ? (
            <li>
              <Link href={`/sell-service`}>
                <a className="flex items-center">
                  <BriefcaseIcon className="w-5 h-5 mr-1" />
                  Sell Service
                </a>
              </Link>
            </li>
          ) : (
            <li>
              <Link href={`/post-job`}>
                <a className=" flex items-center">
                  <CloudeUploadIcon className="h-5 w-5 mr-1" />
                  Post a Job
                </a>
              </Link>
            </li>
          )}
        </span>

        {/* right side items */}
        <span className="flex justify-evenly items-center gap-10">
          {loggedInUserInfo ? (
            <>
              <li>
                <Link href={`/user-dashboard/${26}`}>
                  <a className="flex items-center">
                    <PresentationChartBarIcon className="h-5 w-5 mr-1" />
                    Dashboard
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/user-messages/${26}`}>
                  <a className="flex items-center">
                    <ChatAltIcon className="h-5 w-5 mr-1" />
                    Message
                  </a>
                </Link>
              </li>
              <li>
                <NotificationDropdown loggedInUserInfo={loggedInUserInfo} />
              </li>
              <li>
                <UserDropdown loggedInUserInfo={loggedInUserInfo} />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
              <li>
                <Link href="/login">Log In</Link>
              </li>
            </>
          )}
        </span>
      </ul>
    </nav>
  );
}
