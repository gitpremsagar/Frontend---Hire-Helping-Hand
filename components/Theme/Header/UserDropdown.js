import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "../../svg/heroicons";
import LogoutButton from "./LogoutButton";

export default function UserDropdown(props) {
  const [showDropdown, setshowDropdown] = useState(false);

  useEffect(() => {
    // hiding dropdown on clicking anywhere on the page
    document.addEventListener("click", () => setshowDropdown(false), true);
  }, []);

  const { loggedInUserInfo } = props;
  return (
    <div>
      {/* DropDown triggering button */}
      <button
        className=" flex items-center"
        onClick={() => {
          setshowDropdown(!showDropdown);
        }}
      >
        {loggedInUserInfo.first_name} <ChevronDown className="w-4 h-4 ml-1" />
      </button>

      {/* DropDown list */}
      <div
        className={showDropdown ? `navDropdown showNavDropdown` : `navDropdown`}
      >
        <ul className="navDropdown_Ul">
          <Link href={`/profiles/client-profile/${loggedInUserInfo.idusers}`}>
            <a>
              <li>My Profile as Client</li>
            </a>
          </Link>
          <Link
            href={`/profiles/freelancer-profile/${loggedInUserInfo.idusers}`}
          >
            <a>
              <li>My Profile as Freelancer</li>
            </a>
          </Link>

          <Link href={`/favourite/proposals/${loggedInUserInfo.idusers}`}>
            <a>
              <li>My Favourite Proposals</li>
            </a>
          </Link>

          <Link href={`/favourite/projects/${loggedInUserInfo.idusers}`}>
            <a>
              <li>My Favourite Projects</li>
            </a>
          </Link>

          <li>Settings</li>
          <li>
            <Link href={`/help-and-support`}>
              <a>Help and Support</a>
            </Link>
          </li>

          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </div>
  );
}
