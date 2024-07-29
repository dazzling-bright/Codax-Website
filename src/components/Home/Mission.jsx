import React from "react";

const ContentSection = ({ titleColor, borderColor, title, content }) => {
  return (
    <section className={`max-w-full md:w-1/2 rounded-2xl shadow-xl my-4 p-4`}>
      <h2
        className={`text-${titleColor} pt-4 border-t-2 border-${borderColor} uppercase my-4 font-bold`}
      >
        {title}
      </h2>
      <h3 className="text-custom-royal-blue my-4 text-2xl font-bold">
        Our {title}
      </h3>
      <p className="text-custom-black font-bold">{content}</p>
    </section>
  );
};

const MissionAndVision = () => {
  const missionStatement =
    "To nurture and shape the future leaders in character, skill and learning, thereby making a global impact every day.";
  const visionStatement =
    "To provide world class tutoring to the next generation of Developers.";
  return (
    <section className="m-16 justify-center flex flex-col md:flex-row gap-12 lg:gap-20">
      <ContentSection
        titleColor="orange-300"
        borderColor="orange-300"
        title="Mission"
        content={missionStatement}
      />
      <ContentSection
        titleColor="secondaryColor"
        borderColor="secondaryColor"
        title="Vision"
        content={visionStatement}
      />
    </section>
  );
};

export default MissionAndVision;
