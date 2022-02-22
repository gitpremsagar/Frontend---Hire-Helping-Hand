import Link from "next/link";
import { useEffect, useState } from "react";
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
        id="userDropdown"
        onClick={() => {
          setshowDropdown(!showDropdown);
        }}
      >
        {loggedInUserInfo.first_name}
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
