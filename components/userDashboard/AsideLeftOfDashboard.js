import Link from "next/link";
import { useRouter } from "next/router";

export default function AsideLeftOfDashboard() {
  const router = useRouter();

  return (
    <aside className="AsideLeftOfDashboard">
      <nav>
        <ul>
          <li>Projects</li>
          <li>Earning</li>
          <li>Availability</li>
          <li>Proposals</li>

          <li>Reviews</li>
          <li>Settings</li>
          <Link href={`/help-and-support`}>
            <a>
              <li>Help and Support</li>
            </a>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
