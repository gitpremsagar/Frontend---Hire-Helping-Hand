import Link from "next/link";
import { useState } from "react";
import LogoutButton from "./LogoutButton";

export default function UserDropdown(props) {
  const [showDropdown, setshowDropdown] = useState(false);
  const { loggedInUserInfo } = props;
  return (
    <div>
      {/* DropDown triggering button */}
      <button
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
