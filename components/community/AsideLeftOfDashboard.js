import { useRouter } from "next/router";

export default function AsideLeftOfCommunity() {
  const router = useRouter();

  return (
    <aside className="AsideLeftOfCommunity">
      <nav>
        <ul>
          <li># Explore</li>
          <li>Social Wall</li>
          <li>Followers</li>
          <li>Following</li>
          <li>Trending</li>
        </ul>
      </nav>
    </aside>
  );
}
