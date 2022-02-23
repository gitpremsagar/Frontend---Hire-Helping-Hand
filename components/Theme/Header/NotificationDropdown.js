import Link from "next/link";
import { useState } from "react";
import { BellIconSVG } from "../../svg/heroicons";

export default function NotificationDropdown(props) {
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
        <BellIconSVG className="h-5 w-5 mr-1" />
        Notification
      </button>

      {/* DropDown list */}
      <div
        className={
          showDropdown
            ? `notificationDropdown showNavDropdown`
            : `notificationDropdown`
        }
      >
        <ul className="navDropdown_Ul">
          <li>
            <Link href={`/`}>
              <a>info 1</a>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <a>info 2</a>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <a>info 3</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
