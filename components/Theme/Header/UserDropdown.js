import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "../../svg/heroicons";
import LogoutButton from "./LogoutButton";

export default function UserDropdown(props) {
  const [showDropdown, setshowDropdown] = useState(false);

  // hiding dropdown on clicking on anywhere on document
  document.addEventListener("click", () => setshowDropdown(false), true);

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
          <li>
            <Link href={`/user-profile/${loggedInUserInfo.idusers}`}>
              <a>My Profile</a>
            </Link>
          </li>
          <li>Settings</li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </div>
  );
}
