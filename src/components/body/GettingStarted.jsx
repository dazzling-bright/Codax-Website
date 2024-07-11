// GettingStarted.jsx

import { GettingStartedBtn } from "../general-use/button";

function GettingStarted() {
  // array of items
  const options = [
    {
      icon: "",
      description: "Chat with an expert",
      ButtonComponent: GettingStartedBtn,
      btnText: "Live chat",
      bgColor: "orange-300",
    },
    {
      icon: "",
      description: "Search for a tutor",
      ButtonComponent: GettingStartedBtn,
      btnText: "Search now",
      bgColor: "secondaryColor",
    },
    {
      icon: "",
      description: "Book a lesson",
      ButtonComponent: GettingStartedBtn,
      btnText: "Book now",
      bgColor: "custom-black",
    },
  ];

  return (
    <section className="bg-primaryColor text-secondaryColor max-w-fit p-4 mx-auto">
      <h3 className="leading-snug font-extrabold text-custom-royal-blue text-3xl w-1/2">
        Getting Started is Super Easy. Let’s Get Started!
      </h3>
      <div className="flex flex-col md:flex-row my-8 justify-between gap-4">
        {options.map(({ icon, description, bgColor, btnText }, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 max-w-fit mx-auto"
          >
            {icon && <img src={icon} alt="" className="block" />}
            <p>{description}</p>
            <GettingStartedBtn bgColor={bgColor} btnText={btnText} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GettingStarted;
