import { useRouter } from "next/router";

export default function AsideLeftOfDashboard() {
  const router = useRouter();

  return (
    <aside className="AsideLeftOfDashboard">
      <nav>
        <ul>
          <li>Notifications</li>
          <li>Messages</li>
          <li>Posted Jobs</li>
          <li>Services Offered</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}
