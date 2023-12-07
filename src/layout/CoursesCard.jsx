const CoursesCard = ({ title, img }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-md transition-all">
      <div className="w-3/5">
        <img src={img} alt={title} title={title} />
      </div>
      <div>
        <h3 className="font-semibold text-xl text-center my-5">{title}</h3>
        <p className="text-lightText text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo commodi deleniti excepturi illum autem harum cupiditate quo ipsum ratione.
        </p>
      </div>
    </div>
  );
};

export default CoursesCard;
