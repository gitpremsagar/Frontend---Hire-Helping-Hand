import { useRouter } from "next/router";

export default function AsideLeftOfDashboard() {
  const router = useRouter();

  return (
    <aside className="AsideLeftOfDashboard">
      <nav>
        <ul>
          <li>Freelancer / Client</li>
          <li>Earning</li>
          <li>Spending</li>
          <li>Posted Jobs</li>
          <li>Services Offered</li>
          <li>Team members</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}
