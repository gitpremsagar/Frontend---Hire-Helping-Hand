import Link from "next/link";
import { useRouter } from "next/router";
import NestedLi from "./NestedLi";
import { useSelector } from "react-redux";
import LiHeading from "./LiHeading";

export default function AsideLeftOfDashboard() {
  const router = useRouter();

  const userID = useSelector((state) => state.authSlice.userid);
  return (
    <aside className="AsideLeftOfDashboard">
      <nav>
        <ul>
          <li>
            <LiHeading> Projects</LiHeading>
            <ul>
              <Link
                href={`/user-dashboard/${userID}/projects/ongoing-projects`}
              >
                <a>
                  <NestedLi>Ongoing</NestedLi>
                </a>
              </Link>

              <Link
                href={`/user-dashboard/${userID}/projects/completed-projects`}
              >
                <a>
                  <NestedLi>Completed</NestedLi>
                </a>
              </Link>
            </ul>
          </li>

          <li>
            <LiHeading> My Proposals</LiHeading>
            <ul>
              <Link href={`/user-dashboard/${userID}/proposals/active`}>
                <a>
                  <NestedLi>Active</NestedLi>
                </a>
              </Link>
              <Link href={`/user-dashboard/${userID}/proposals/paused`}>
                <a>
                  <NestedLi>Paused</NestedLi>
                </a>
              </Link>
              <Link href={`/user-dashboard/${userID}/proposals/draft`}>
                <a>
                  <NestedLi>Draft</NestedLi>
                </a>
              </Link>
            </ul>
          </li>

          <li>
            <LiHeading>Others</LiHeading>
            <ul>
              <Link href={`/user-dashboard/${userID}/my-earnings`}>
                <a>
                  <NestedLi>My Earning</NestedLi>
                </a>
              </Link>
              <Link href={`/user-dashboard/${userID}/reviews`}>
                <a>
                  <NestedLi>Reviews</NestedLi>
                </a>
              </Link>
              <Link href={`/user-dashboard/${userID}/settings`}>
                <a>
                  <NestedLi>Settings</NestedLi>
                </a>
              </Link>
              <Link href={`/help-and-support`}>
                <a>
                  <NestedLi>Help and Support</NestedLi>
                </a>
              </Link>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
