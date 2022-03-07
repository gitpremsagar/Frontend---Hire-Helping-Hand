import Link from "next/link";
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

export default function Navbar(props) {
  const { loggedInUserInfo } = props;
  return (
    <nav className="">
      <ul className="flex p-5 bg-gray-900 text-white justify-between items-center">
        {/* left side item */}
        <span className="flex items-center gap-10">
          <li className="font-bold">
            <Link href={`/`}>H-H-H</Link>
          </li>

          <li>
            <Link href={`/community`}>
              <a className="flex items-center">
                <UserGroupIcon w={5} h={5} className="mr-1" />
                Community
              </a>
            </Link>
          </li>

          {loggedInUserInfo ? (
            <>
              <li>
                <Link href={`/post-job/${45}`}>
                  <a className=" flex items-center">
                    <CloudeUploadIcon className="h-5 w-5 mr-1" />
                    Post Job
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/sell-service/${loggedInUserInfo.idusers}`}>
                  <a className="flex items-center">
                    <BriefcaseIcon className="w-5 h-5 mr-1" />
                    Sell Service
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={`/post-job`}>
                  <a className=" flex items-center">
                    <CloudeUploadIcon className="h-5 w-5 mr-1" />
                    Post Job
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/sell-service`}>Become Freelancer</Link>
              </li>
            </>
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
