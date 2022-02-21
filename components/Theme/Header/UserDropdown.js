import Link from "next/link";
import { useState } from "react";

export default function UserDropdown(props) {
  const [showDropdown, setshowDropdown] = useState(false);
  const { loggedInUserInfo } = props;
  console.log("showDropdown = ", showDropdown);
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
          <li>Log out</li>
        </ul>
      </div>
    </div>
  );
}
