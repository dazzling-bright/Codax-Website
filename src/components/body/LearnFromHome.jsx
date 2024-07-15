import SectionBorderBottom from "../general-use/SectionBorderBottom";
import LearnerImage from "../body/images/techBro.png";

function LearnFromHome() {
  return (
    <section className="flex flex-col md:flex-row px-4 md:px-8 lg:px-8 justify-center items-center mt-12 mb-24 gap-4 font-semibold">
      <figure className="w-full md:w-1/2 p-16 lg:p-20">
        <img
          src={LearnerImage}
          alt="A young smiling woman"
          className="block w-full h-auto object-cover"
        />
      </figure>
      <div className="w-full md:w-1/2 mx-4 lg:px-8">
        <h2 className="font-bold text-4xl mb-4 text-custom-royal-blue">
          Learn from the Comfort of Your Home
        </h2>
        <SectionBorderBottom text="paced learning" />
        <p className="text-xl leading-10 text-custom-black ">
          At Codax, we pride ourselves in being able to impart knowledge with
          precision, simplicity and results. This is an opportunity to teach
          what you love while raising the next generation of Software
          Developers. Think you’ve got what it takes to be an estinguished tutor
          at Codax? Let us know.
          <br />
          <br />
          <span className="text-custom-royal-blue text-right block mt-4 pr-4">
            <a
              href="/"
              className="text-secondaryColor underline hover:font-bold transition-all duration-300"
            >
              Read More
            </a>
          </span>
        </p>
      </div>
    </section>
  );
}

export default LearnFromHome;
