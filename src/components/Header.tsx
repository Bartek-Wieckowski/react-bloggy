import facebook from "../assets/icons/facebook-logo-thin.svg";
import youtube from "../assets/icons/youtube-logo-thin.svg";
import instagram from "../assets/icons/instagram-logo-thin.svg";
import moon from "../assets/icons/moon-thin.svg";
import sun from "../assets/icons/sun-thin.svg";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const generateHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <>
      <div className="flex justify-between items-center container mx-auto px-4 pt-4">
        <div className="flex md:hidden">
          <button
            className="flex flex-col h-12 w-12 justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`${generateHamburgerLine} ${isOpen && "rotate-45 translate-y-3 "}`} />
            <div className={`${generateHamburgerLine} ${isOpen && "opacity-0"}`} />
            <div className={`${generateHamburgerLine} ${isOpen && "-rotate-45 -translate-y-3"}`} />
          </button>
        </div>
        <div className="hidden md:flex">
          <img src={sun} alt="toggle theme website" width={30} height={30} />
          <img src={moon} alt="toggle theme website" width={30} height={30} />
        </div>
        <div className="font-[Codystar] text-4xl md:text-7xl text-black text-center">Bloggy</div>
        <div className="flex flex-col md:flex-row ">
          <img src={facebook} alt="company logo" width={30} height={30} />
          <img src={youtube} alt="company logo" width={30} height={30} />
          <img src={instagram} alt="company logo" width={30} height={30} />
        </div>
      </div>
      <Navbar />
    </>
  );
}
