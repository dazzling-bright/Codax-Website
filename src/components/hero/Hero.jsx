import Button from "../general-use/button";
import UserOne from "./user1.png";
import UserTwo from "./user2.png";
import UserThree from "./user3.png";

const Hero = ({
  HeroImage,
  plainHeadingText,
  coloredHeadingText,
  dynamicHeadingText = "",
}) => {
  const usersImage = [
    {
      src: UserOne,
      alt: "A smiling young man",
    },
    {
      src: UserTwo,
      alt: "A smiling young woman",
    },
    {
      src: UserThree,
      alt: "A smiling young woman",
    },
  ];

  return (
    <section className="bg-primaryColor pt-8 pb-8 px-4 md:px-8 lg:px-8 mb-24 flex flex-col md:flex-row text-blue-500 items-center gap-4">
      <main className=" flex justify-between flex-col md:w-1/2 md:gap-12">
        <h2 className="mt-4 leading-tight text-4xl font-extrabold text-black">
          {plainHeadingText}   
          <span className="text-orange-300"> {coloredHeadingText} </span>
          {dynamicHeadingText}
        </h2>
        <p className=" text-custom-royal-blue my-2">
          Join the largest online learning platform to upscale your skills for a
          better future
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 text-sm">
          <Button className="md:flex-1">Start Learning for free</Button>
          <Button
            bgColor="bg-white"
            textColor="text-blue-500"
            hoverBgColor="hover:bg-blue-800"
            hoverTextColor="hover:text-white"
            className="md:flex-1 px-16 md:px-0"
          >
            Discover
          </Button>
        </div>
        <div className="text-center text-xl bg-white border-4 shadow-md rounded-2xl py-4 self-center p-2 lg:mt-8">
          <p className="font-bold">More than 2,000 Students Placed</p>
          <p className="text-xl">5k registered users</p>
          <figure className="flex gap-2 justify-center">
            {usersImage.map(({ src, alt }, index) => (
              <img
                key={index}
                className="w-[50px] h-[50px] object-cover mt-2"
                src={src}
                alt={alt}
              />
            ))}
          </figure>
        </div>
      </main>

      {/* Hero Main Image */}
      <figure className="md:w-1/2">
        <img
          className="block object-cover"
          src={HeroImage}
          alt="A young man smiling"
        />
      </figure>
    </section>
  );
};

export default Hero;
