import { useRouter } from "next/router";

export default function AsideLeftOfUserMessages() {
  const router = useRouter();

  return (
    <aside className="AsideLeftOfDashboard">
      <nav>
        <ul>
          <li>All</li>
          <li>Freelancers Only</li>
          <li>Clients Only</li>
          <li>Your Team</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}
