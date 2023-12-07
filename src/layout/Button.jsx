const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-white text-xl py-2 px-5 rounded-full mt-4 outline hover:shadow-md hover:bg-brightGreen hover:text-white transition-all">
        {title}
      </button>
    </div>
  );
};

export default Button;
