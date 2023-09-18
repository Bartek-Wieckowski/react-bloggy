import { Link } from "react-router-dom";
type isOpenMenu = {
  isOpen: boolean;
};

const navLinks = [
  {
    id: "home",
    title: "home",
    path: "/",
  },
  {
    id: "login",
    title: "login",
    path: "/login",
  },
  {
    id: "register",
    title: "register",
    path: "/register",
  },
];

export default function Navbar({ isOpen }: isOpenMenu) {
  return (
    <nav className="md:mt-4 md:border-y-2 md:border-gray-800">

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:justify-center md:items-center md:gap-4 md:py-4">
        {navLinks.map((navItem) => (
          <li key={navItem.id} className="uppercase">
            <Link to={navItem.path}>{navItem.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`${
          isOpen
            ? "top-[110px] opacity-100 fixed min-h-screen bg-slate-50 flex flex-col justify-around pb-8 w-full text-center transition-all duration-200 md:hidden"
            : "opacity-0 absolute -top-full md:hidden"
        }`}
      >
        {navLinks.map((navItem) => (
          <li key={navItem.id} className="uppercase text-5xl text-slate-800">
            <Link to={navItem.path}>{navItem.title}</Link>
          </li>
        ))}
      </ul>

    </nav>
  );
}
