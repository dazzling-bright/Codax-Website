import React from "react";

//dynamically load the images instead of staic import
const teamImages = {
  victoria: () => import("./images/team-members/victoria.png"),
  ada: () => import("./images/team-members/ada.png"),
  blessing: () => import("./images/team-members/blessing.png"),
  joy: () => import("./images/team-members/joy.png"),
};

// Team member card component
const TeamMemberCard = ({ name, loadImage, specialty, index }) => {
  const [image, setImage] = React.useState(null);

  // load the image only when the component mounts
  React.useEffect(() => {
    loadImage().then((module) => setImage(module.default));
  }, [loadImage]);

  return (
    <div
      className="w-full flex flex-col gap-4 self-stretch shadow-lg py-4 px-2 rounded-2xl bg-primaryColor"
      key={index}
    >
      <figure className="max-h-[160px] overflow-hidden">
        {image && (
          <img
            src={image}
            alt={`Team member ${index + 1}`}
            className="block object-cover"
          />
        )}
      </figure>
      <React.Fragment>
        <p className="font-bold text-custom-royal-blue">{name}</p>
        <span>
          <a
            href="/"
            className="text-secondaryColor underline font-bold hover:opacity-85 transition-opacity duration-200s"
          >
            Message tutor
          </a>
        </span>
        <p className="text-custom-black">{specialty}</p>
      </React.Fragment>
    </div>
  );
};

// the full container
function AboutTeam() {
  const teamMembers = [
    {
      name: "Victoria Adekunle",
      loadImage: teamImages.victoria,
      specialty:
        "Java Development Industry Expert with 7+ years in the field of Software Development.",
    },
    {
      name: "Ada Nwogu",
      loadImage: teamImages.ada,
      specialty:
        "Django and Angular JS Industry Expert with 6+ years in the field.",
    },
    {
      name: "Blessing Okonkwo",
      loadImage: teamImages.blessing,
      specialty:
        "Cloud Computing Industry Expert with 5+ years of experience in the field.",
    },
    {
      name: "Joy Ejiakaonye",
      loadImage: teamImages.joy,
      specialty:
        "Cyber Security Industry Expert with 4+ years of experience in the field.",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center p-8 shadow-lg gap-6 rounded-xl ">
      {teamMembers.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          loadImage={member.loadImage}
          specialty={member.specialty}
          index={index}
        />
      ))}
    </section>
  );
}

export default AboutTeam;
