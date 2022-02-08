import Link from "next/link";
import SearchForm from "./searchForm";

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex p-2 bg-gray-900 text-white justify-evenly items-center">
        <li className="font-bold">
          <Link href={`/`}>H-H-H</Link>
        </li>
        <li>
          <Link href={`/become-freelancer`}>Become Freelancer</Link>
        </li>
        <li>
          <SearchForm />
        </li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
        <li>
          <Link href="/login">Log In</Link>
        </li>
      </ul>
    </nav>
  );
}
