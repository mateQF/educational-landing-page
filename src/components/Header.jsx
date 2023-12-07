import { Link } from "react-scroll";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div id="#home">
      <div className="flex items-center flex-row justify-between p-5 md:px-32 bg-white shadow-md">
        <div>
          <Link to="#home" spy={true} smooth={true} duration={500} className="font-semibold text-2xl p-1 cursor-pointer">
            eStudy
          </Link>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
