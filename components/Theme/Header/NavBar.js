import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex p-3 bg-gray-900 text-white justify-between items-center">
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
          <li>
            <Link href={`/become-freelancer`}>Become Freelancer</Link>
          </li>
          <li>
            <Link href={`/post-job`}>Post a job</Link>
          </li>

          <li>
            <Link href={`/social-wall`}>Social Wall</Link>
          </li>
          <li>
            <span className="bg-blue-400 px-2 py-1 rounded">Client Mode</span>
          </li>
        </span>
        <span className="flex justify-evenly items-center gap-5">
          <li>
            <Link href="/notification">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </Link>
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
