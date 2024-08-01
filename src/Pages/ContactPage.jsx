import Hero from "../components/hero/Hero";
import Contact from "../components/Contact/Contact";
import ContactHeroImage from "../components/Contact/images/ContactHeroImage.png"

const ContactPage = () => (
  <>
    <Hero
      HeroImage={ContactHeroImage}
      plainHeadingText="  Contact Us"
      coloredHeadingText="Today!"
     
    />
    <Contact />
  </>
);

export default ContactPage;
