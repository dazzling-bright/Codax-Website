import React from "react";

const ContentSection = ({ titleColor, borderColor, title, content }) => {
  return (
    <section className={`border-t-4 border-${borderColor} w-full md:w-1/2`}>
      <h2 className={`text-${titleColor} uppercase my-4 font-bold`}>{title}</h2>
      <h3 className="text-custom-royal-blue my-4 text-2xl font-bold">
        Our {title}
      </h3>
      <p className="text-custom-black">{content}</p>
    </section>
  );
};

const MissionAndVision = () => {
  const missionContent =
    "To nurture and shape the future leaders in character, skill and learning, thereby making a global impact every day.";
  const visionContent =
    "To provide world class tutoring to the next generation of Developers.";
  return (
    <section className="m-16 justify-center flex flex-col md:flex-row gap-12 lg:gap-20">
      <ContentSection
        titleColor="orange-300"
        borderColor="orange-300"
        title="Mission"
        content={missionContent}
      />
      <ContentSection
        titleColor="secondaryColor"
        borderColor="secondaryColor"
        title="Vision"
        content={visionContent}
      />
    </section>
  );
};

export default MissionAndVision;
