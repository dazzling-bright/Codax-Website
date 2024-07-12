import SectionBorderBottom from "../general-use/SectionBorderBottom";
import AboutUsImage from "./images/AboutUsImage.png";

function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row px-4 md:px-8 lg:px-8 justify-center items-center mt-12 mb-24 gap-4 font-semibold">
      <figure className="w-full md:w-1/2 p-16 lg:p-20">
        <img
          src={AboutUsImage}
          alt="A young smiling woman"
          className="block w-full h-auto object-cover"
        />
      </figure>
      <div className="w-full md:w-1/2 mx-4 lg:px-8">
        <h2 className="font-bold text-4xl mb-6 text-custom-royal-blue">
          About Us
        </h2>
        <SectionBorderBottom text="since 2022"/>
        <p className="text-xl leading-10 text-custom-black ">
          We are a global brand that provides tutoring services in Software
          Development, Cyber Security, Programming, and Artificial Intelligence.
          As part of our mission to help people succeed in these fields, we
          offer affordable learning courses curated and delivered by industry
          experts.
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

export default AboutUs;
