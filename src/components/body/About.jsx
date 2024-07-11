import AboutUsImage from "./images/AboutUsImage.png";

function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row md:px-8 justify-center items-center mt-12 mb-24 gap-4">
      <figure className="w-1/2 lg:p-24">
        <img
          src={AboutUsImage}
          alt="A young smiling woman"
          className="block object-contain"
        />
      </figure>
      <div className="w-1/2 mx-4 lg:px-8">
        <h2 className="font-bold text-4xl mb-8 text-custom-royal-blue ">
          About Us
        </h2>
        <p className="text-base leading-8 text-custom-black lg:text-2xl lg:leading-10">
          We are a global brand that provides tutoring services in Software
          Development, Cyber Security, Programming and Artificial Intelligence.
          As part of our way of helping people succeed in these fields, we offer
          very affordable learning courses, curated and delivered by industry
          experts so ensure that you are planted in the tech ecosystem with
          ease.
          <p className="text-custom-royal-blue text-right mt-4 pr-4">
            <a href="/">Read More</a>
          </p>
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
