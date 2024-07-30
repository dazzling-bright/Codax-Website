import SoftwareDevelopment from "./images/softwareDevelopment.svg";
import CloudCompute from "./images/cloudCompute.svg";
import CyberSecurity from "./images/cyberSecurity.svg";
import ProgramLanguage from "./images/programmingLang.svg";

const categories = [
  {
    src: SoftwareDevelopment,
    alt: "Software Development",
    title: "Software Development",
  },
  { src: CyberSecurity, alt: "Cyber Security", title: "Cyber Security" },
  { src: CloudCompute, alt: "Cloud Computing", title: "Cloud Computing" },
  {
    src: ProgramLanguage,
    alt: "Basic Programming Languages",
    title: "Basic Programming Languages",
  },
];

const TopCategory = () => {
  return (
    <section className="text-center">
      <h2 className="my-8 text-custom-royal-blue text-3xl font-bold">
        Our Top Categories
      </h2>
      <p className="my-8 text-custom-royal-blue">
        Take high quality online courses from experts around the world to
        develop your skills.
      </p>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-4 my-4 md:my-8">
            <div className="bg-custom-black p-8 max-w-fit rounded-lg">
              <img src={category.src} alt={category.alt} />
            </div>
            <p>{category.title}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default TopCategory;
