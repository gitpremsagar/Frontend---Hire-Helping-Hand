import { useRouter } from "next/router";

export default function AsideLeftOfUserMessages() {
  const router = useRouter();

  return (
    <aside className="AsideLeftOfDashboard">
      <nav>
        <h4 className="text-lg font-medium m-2">Inbox</h4>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
          <li>User 4</li>
          <li>User 5</li>
          <li>User 6</li>
          <li>User 7</li>
          <li>User 8</li>
        </ul>
      </nav>
    </aside>
  );
}
