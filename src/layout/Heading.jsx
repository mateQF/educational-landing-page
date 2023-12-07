const Heading = ({ title1, title2 }) => {
  return (
    <div className="flex items-center gap-3 justify-center">
      <h3 className="text-5xl font-semibold">{title1}</h3>
      <span className="text-brightGreen text-5xl font-semibold">{title2}</span>
    </div>
  );
};

export default Heading;
