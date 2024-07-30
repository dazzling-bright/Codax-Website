import CloudCompute from "./images/coursesImages/cloudCompute.png";
import StarRating from "./images/coursesImages/starRating.svg";
import Django from "./images/coursesImages/django.png";
import UserExperience from "./images/coursesImages/userExperience.png";
import Java from "./images/coursesImages/java.png";
import Html from "./images/coursesImages/html.png";
import SoftwareDev from "./images/coursesImages/softwareDev.png";

const courses = [
  {
    image: CloudCompute,
    title: "Advanced Cloud Computing",
    instructor: "Okonkwo Blessing",
    rating: 4.6,
    reviews: 1280,
    price: "Free",
  },
  {
    image: Django,
    title: "Django and Angular JS 2.0",
    instructor: "Ada Nwogu",
    rating: 4.6,
    reviews: 1280,
    price: "Free",
  },
  {
    image: UserExperience,
    title: "User Experience for Pros",
    instructor: "Victoria Adekunle",
    rating: 4.6,
    reviews: 1280,
    price: "Free",
  },
  {
    image: Java,
    title: "Expert Level Java Development",
    instructor: "Victoria Adekunle",
    rating: 4.6,
    reviews: 1280,
    price: "Free",
  },
  {
    image: Html,
    title: "Intermediary Level HTML & CSS",
    instructor: "Ejiakaonye Joy",
    rating: 4.6,
    reviews: 1280,
    price: "Free",
  },
  {
    image: SoftwareDev,
    title: "Software Development 2",
    instructor: "Ada Nwogu",
    rating: 4.6,
    reviews: 1280,
    price: "Free",
  },
];

const FreeCourses = () => {
  return (
    <section className="bg-primaryColor text-secondaryColor px-8 pt-8 pb-12 mb-12">
      <div className="flex justify-between items-center my-8">
        <h2 className="capitalize font-bold text-4xl text-left">
          Most Popular Courses
        </h2>
        <a
          href="/"
          className="text-lg font-semibold hover:underline transition-all duration-200"
        >
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {courses.map((course, index) => (
          <article
            key={index}
            className="bg-white flex h-[140px] w-full gap-4 py-4 px-4 rounded-2xl shadow-md"
          >
            <figure className="overflow-hidden w-1/3">
              <img
                className="block w-full h-full object-cover rounded-2xl"
                src={course.image}
                alt="a cloud of computer networks"
              />
            </figure>
            <aside className="grid w-2/3">
              <h3 className="font-bold">{course.title}</h3>
              <p>{course.instructor}</p>
              <p className="flex gap-4 items-center">
                <span>{course.rating}</span>
                <img src={StarRating} alt="star rating" />
                <span className="font-semibold">({course.reviews})</span>
              </p>
              <p className="text-black font-semibold">{course.price}</p>
            </aside>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FreeCourses;
