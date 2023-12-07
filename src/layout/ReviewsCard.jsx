const ReviewsCard = ({ img }) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-lightText md:border-none p-5 rounded-lg hover:shadow-md transition-all">
      <div>
        <p className="text-lightText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sunt
          sint enim voluptate quod pariatur quo quam, quasi impedit voluptatem
          recusandae! Provident quia in debitis perferendis incidunt voluptatem
          deleniti possimus corporis iste error ducimus delectus expedita
          libero, aliquam quae quaerat?
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <img className="rounded-full w-1/4" src={img} alt="" />
      </div>
    </div>
  );
};

export default ReviewsCard;
