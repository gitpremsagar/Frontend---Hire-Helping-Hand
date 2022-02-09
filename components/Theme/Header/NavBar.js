import Link from "next/link";
import SearchForm from "./searchForm";

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex p-2 bg-gray-900 text-white justify-between items-center">
        <span className="flex items-center gap-5">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </li>
          <li className="font-bold">
            <Link href={`/`}>H-H-H</Link>
          </li>
        </span>
        <span className="flex justify-evenly items-center gap-5">
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
        </span>
      </ul>
    </nav>
  );
}
