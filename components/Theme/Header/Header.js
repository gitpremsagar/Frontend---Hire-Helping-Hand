import Navbar from "./NavBar";

export default function Header(props) {
  return (
    <header className="sticky top-0 z-50">
      <Navbar {...props} />
    </header>
  );
}
