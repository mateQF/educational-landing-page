import Button from "../layout/Button";
import Heading from "../layout/Heading";
import contactImg from "../assets/contact.svg";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <Heading title1={"Contact"} title2={"Us"} />
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <form className="w-full md:w-2/5 space-y-5 pt-20">
          <div className="flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-md transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-md transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="johndoe@mail.com"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userMobile">Your Number</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-md transition-all"
              type="tel"
              name="userMobile"
              id="userMobile"
              placeholder="Mobile phone number"
            />
          </div>
          <div className="flex justify-center">
            <Button title={"Send Message"} />
          </div>
        </form>

        <div className="w-full md:w-2/4">
            <img src={contactImg} alt="Contact" title="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
