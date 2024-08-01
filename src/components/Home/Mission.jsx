import MissionBackground from "./images/bg-mission.svg";
import VisionBackground from "./images/bg-vision.svg";

const ContentSection = ({
  titleColor,
  borderColor,
  title,
  content,
  backgroundImage,
}) => {
  return (
    <div
      className="relative flex flex-1 items-center justify-center bg-contain h-[400px] bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <section className="bg-white rounded-2xl shadow-xl p-6 max-w-full md:w-3/4 relative z-10">
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
    </div>
  );
};

const MissionAndVision = () => {
  const missionStatement =
    "To nurture and shape the future leaders in character, skill and learning, thereby making a global impact every day.";
  const visionStatement =
    "To provide world class tutoring to the next generation of Developers.";

  return (
    <section className="flex flex-col md:flex-row gap-12 lg:gap-20">
      <ContentSection
        titleColor="orange-300"
        borderColor="orange-300"
        title="Mission"
        content={missionStatement}
        backgroundImage={MissionBackground}
      />
      <ContentSection
        titleColor="secondaryColor"
        borderColor="secondaryColor"
        title="Vision"
        content={visionStatement}
        backgroundImage={VisionBackground}
      />
    </section>
  );
};

export default MissionAndVision;
