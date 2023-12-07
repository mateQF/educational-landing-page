import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-black text-white py-4">
      <div className="flex flex-col md:flex-row justify-between md:px-32 p-5">
        <div className="flex flex-wrap gap-5 font-medium p-1 text-lg">
          <Link
            to="#home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="#about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="#courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Courses
          </Link>
          <Link
            to="#reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Reviews
          </Link>
          <Link
            to="#contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <div className="mt-4 md:mt-0">
          <Link
            to="#home"
            className="font-semibold text-2xl p-1 cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
          >
            eStudy
          </Link>
        </div>
      </div>

      <div className="text-left md:text-center md:px-32 p-5">
        <p>
          @Copyright developed by
          <span className="text-brightGreen px-2">Mateo Fortuna</span>|
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
