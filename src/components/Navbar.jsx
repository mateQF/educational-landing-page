import { Link } from "react-scroll";
import { links } from "../utils/dataNav";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => setMenu(!menu);

  return (
    <>
      <nav className="hidden md:flex gap-5 font-medium p-1 cursor-pointer">
        {links?.map((link) => {
          return (
            <Link
              to={link.to}
              key={crypto.randomUUID()}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightGreen text-lg transition-all cursor-pointer"
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex md:hidden" onClick={handleChange}>
        <AiOutlineMenu className="cursor-pointer" size={22} />
      </div>

      <nav
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-white top-16 left-0 font-medium text-2xl text-center py-10 px-12 gap-8 h-fit w-full transition-transform duration-300 `}
      >
        {links?.map((link) => {
          return (
            <Link
              to={link.to}
              key={crypto.randomUUID()}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightGreen transition-all cursor-pointer"
              onClick={handleChange}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
