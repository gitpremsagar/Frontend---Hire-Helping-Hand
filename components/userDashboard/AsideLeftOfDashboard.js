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
          <li>Help and Support</li>
        </ul>
      </nav>
    </aside>
  );
}
