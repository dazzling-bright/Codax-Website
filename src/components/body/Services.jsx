import ResourcesIcon from "./images/resources.svg";
import ThumbIcon from "./images/vuesax.svg";
import PriceIcon from "./images/price.svg";

const services = [
  {
    icon: ThumbIcon,
    title: "Ease",
    description:
      "The process is easy and convenient. You can make it as fast or as paced as you feel is right for you",
  },
  {
    icon: ResourcesIcon,
    title: "Resources",
    description:
      "We provide you with the latest technological advancements in the field of study you choose",
  },
  {
    icon: PriceIcon,
    title: "Affordable",
    description:
      "Our courses are very pocket friendly. We also have an array of free courses to get you started",
  },
];

function Services() {
  return (
    <section aria-labelledby="services-heading" className="p-8 ">
      <h2 id="services-heading" className="font-bold text-4xl text-center md:text-left">
        Our Services
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 font-bold">
        {services.map(({ icon, description, title }, index) => (
          <div
            key={index}
            className="w-3/4 md:w-1/3 px-4 py-12 shadow-xl rounded-2xl flex flex-col items-center gap-2"
            tabIndex="0"
          >
            <img
              src={icon}
              alt={`${title} icon`}
              aria-hidden="true"
              className=" w-12"
            />
            <p className="text-custom-royal-blue text-xl" tabIndex="0">
              {title}
            </p>
            <p className="text-custom-black" tabIndex="0">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
