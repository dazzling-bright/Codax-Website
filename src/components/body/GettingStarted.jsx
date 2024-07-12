import { useMemo } from "react";
import { GettingStartedBtn } from "../general-use/button";
import ChatIcon from "./images/message.svg";
import SearchTutorIcon from "./images/searchTutor.svg";
import BookTutorIcon from "./images/bookmark.svg";

function GettingStarted() {
  // Memoize the array of items to prevent recreation on every render
  const options = useMemo(
    () => [
      {
        icon: ChatIcon, 
        description: "Chat with an expert",
        btnText: "Live chat",
        bgColor: "orange-300", // Match this with the colorClasses key
      },
      {
        icon: SearchTutorIcon,
        description: "Search for a tutor",
        btnText: "Search now",
        bgColor: "secondaryColor", // Match this with the colorClasses key
      },
      {
        icon: BookTutorIcon,
        description: "Book a lesson",
        btnText: "Book now",
        bgColor: "custom-black", // Match this with the colorClasses key
      },
    ],
    []
  );

  return (
    <section className="bg-primaryColor px-4 md:px-8 lg:px-8 text-secondaryColor max-w-fit p-4 mx-auto rounded-lg">
      <h3 className="leading-snug font-extrabold text-custom-royal-blue text-3xl w-1/2">
        Getting Started is Super Easy. Let’s Get Started!
      </h3>
      <div className="flex flex-wrap my-8 justify-between gap-4">
        {options.map(({ icon, description, bgColor, btnText }, index) => (
          <div key={index} className="flex flex-col items-center gap-4 ">
            <figure className="p-4 rounded-full bg-white">
              {icon && <img src={icon} alt="" className="w-12" />}
            </figure>
            <p className="font-bold">{description}</p>
            <GettingStartedBtn bgColor={bgColor} btnText={btnText} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GettingStarted;
