import Link from "next/link";

function LeftNav() {
  return (
    <aside className="w-64 bg-gray-200 p-4">
      <nav>
        <Link href="/">
          <a className="block mt-4 text-gray-800 hover:text-gray-600">Home</a>
        </Link>
        <Link href="/services">
          <a className="block mt-4 text-gray-800 hover:text-gray-600">
            Services
          </a>
        </Link>
        <Link href="/about">
          <a className="block mt-4 text-gray-800 hover:text-gray-600">About</a>
        </Link>
        <Link href="/contact">
          <a className="block mt-4 text-gray-800 hover:text-gray-600">
            Contact
          </a>
        </Link>
      </nav>
    </aside>
  );
}

export default LeftNav;
