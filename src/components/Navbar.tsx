import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="mt-4 border-y-2 border-gray-800">
      <ul className="flex justify-center items-center gap-4 py-4">
        <li>
          <Link to="/">BLOG</Link>
        </li>

        <li>
          <Link to="/login">LOGIN </Link>
        </li>
        <li>
          <Link to="/register">REGISTER</Link>
        </li>
      </ul>
    </nav>
  );
}
