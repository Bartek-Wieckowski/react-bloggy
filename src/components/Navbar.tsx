import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
type isOpenMenu = {
  isOpen: boolean;
  onCloseMenu: () => void;
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

export default function Navbar({ isOpen, onCloseMenu }: isOpenMenu) {
  const ref = useRef<HTMLUListElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setIsScrolled(window.scrollY > rect.top);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="md:mt-4 md:border-y-2 md:border-gray-800 dark:md:border-gray-400">
      {/* Desktop Menu */}
      <ul className="hidden md:container md:flex md:justify-center md:items-center md:gap-4 md:p-4 md:mx-auto">
        {navLinks.map((navItem) => (
          <li key={navItem.id} className="uppercase">
            <Link to={navItem.path}>{navItem.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <ul
        ref={ref}
        className={`${
          isOpen ? (isScrolled ? "top-0" : "top-[110px]") : "opacity-0 absolute -top-full"
        } opacity-100 fixed h-[100%] bg-slate-50 flex flex-col justify-around pb-8 w-full text-center transition-all duration-200 md:hidden`}
      >
        {navLinks.map((navItem) => (
          <li key={navItem.id} className="uppercase text-5xl text-slate-800">
            <Link to={navItem.path} onClick={onCloseMenu}>
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
