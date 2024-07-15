import { useMemo } from "react";
import { GettingStartedBtn } from "../general-use/button";
import ChatIcon from "./images/message.svg";
import SearchTutorIcon from "./images/searchTutor.svg";
import BookTutorIcon from "./images/bookmark.svg";

function GettingStarted() {
  const options = useMemo(
    () => [
      {
        icon: ChatIcon,
        description: "Chat with an expert",
        btnText: "Live chat",
        bgColor: "orange-300",
      },
      {
        icon: SearchTutorIcon,
        description: "Search for a tutor",
        btnText: "Search now",
        bgColor: "secondaryColor",
      },
      {
        icon: BookTutorIcon,
        description: "Book a lesson",
        btnText: "Book now",
        bgColor: "custom-black",
      },
    ],
    []
  );

  return (
    <section className="bg-primaryColor relative px-4 md:px-8 lg:px-8 text-secondaryColor max-w-fit p-4 mx-auto rounded-lg">
      <AnimateContent />
      <h3 className="leading-snug font-extrabold text-custom-royal-blue mt-24 text-3xl w-1/2">
        Getting Started is Super Easy. Let’s Get Started!
      </h3>
      <div className="flex flex-wrap my-8 justify-between gap-4">
        {options.map(({ icon, description, bgColor, btnText }, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
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

const AnimateContent = () => {
  const content = [
    "Web Development",
    "Artificial Intelligence",
    "Web Design",
    "Cyber Security",
    "Software Development",
  ];

  return (
    <aside className="overflow-hidden whitespace-nowrap absolute top-0 left-0 w-full bg-primaryColor text-secondaryColor p-8 rounded-br-2xl rounded-bl-2xl shadow-md font-bold">
      <div className="inline-block animate-scroll">
        {content.concat(content).map((item, index) => (
          <p key={index} className="inline-block mr-8">
            {item}
          </p>
        ))}
      </div>
    </aside>
  );
};
