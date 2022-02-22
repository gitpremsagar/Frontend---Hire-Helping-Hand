import Link from "next/link";
import { BellIconSVG } from "../../svg/heroicons";
import UserDropdown from "./UserDropdown";

export default function Navbar(props) {
  const { loggedInUserInfo } = props;
  return (
    <nav className="">
      <ul className="flex p-3 bg-gray-900 text-white justify-between items-center">
        {/* left side item */}
        <span className="flex items-center gap-5">
          <li className="font-bold">
            <Link href={`/`}>H-H-H</Link>
          </li>

          <li>
            <Link href={`/community`}>Community</Link>
          </li>
          <li>
            <Link href={`/post-job`}>Post Job</Link>
          </li>
          {loggedInUserInfo ? (
            <>
              <li>
                <Link href={`/become-freelancer`}>Post Service</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={`/become-freelancer`}>Become Freelancer</Link>
              </li>
            </>
          )}
        </span>

        {/* right side items */}
        <span className="flex justify-evenly items-center gap-5">
          {loggedInUserInfo ? (
            <>
              <li>
                <Link href="/user-notification">
                  <a>
                    <BellIconSVG />
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/user-dashboard/${26}`}>Dashboard</Link>
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
