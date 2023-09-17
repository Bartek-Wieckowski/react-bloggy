import facebook from "../assets/icons/facebook-logo-thin.svg";
import youtube from "../assets/icons/youtube-logo-thin.svg";
import instagram from "../assets/icons/instagram-logo-thin.svg";
export default function Header() {
  const generateHamburger = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <div className="flex justify-between container mx-auto px-4">
      <div className="flex md:hidden">
        <button className="h-12 w-12 px-2 flex flex-col justify-center items-center group ">
          <div className={`${generateHamburger} w-3 mr-auto`}></div>
          <div className={`${generateHamburger}`}></div>
          <div className={`${generateHamburger} w-3 ml-auto`}></div>
        </button>
      </div>
      <div className="font-[Codystar] text-4xl md:text-7xl text-black text-center">Bloggy</div>
      <div className="flex flex-col md:flex-row ">
        <img src={facebook} alt="company logo" width={30} height={30} />
        <img src={youtube} alt="company logo" width={30} height={30} />
        <img src={instagram} alt="company logo" width={30} height={30} />
      </div>
    </div>
  );
}
