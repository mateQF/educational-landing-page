import { Link } from "react-scroll";
import about from "../assets/about.svg";
import Button from "../layout/Button";
import Heading from "../layout/Heading";

const About = () => {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className="w-full md:w-2/4">
        <img src={about} alt="About" title="About" />
      </div>
      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1={"About"} title2={"Us"} />
        <p className="text-lightText my-5 text-start text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quas
          cumque, nemo odit unde quod numquam hic adipisci aut nesciunt ut eaque
          aspernatur facilis minus laudantium. Voluptates sint necessitatibus
          explicabo.
        </p>
        <Link to="#contact" spy={true} smooth={true} duration={500}>
          <Button title={"Contact Us"} />
        </Link>
      </div>
    </div>
  );
};

export default About;
