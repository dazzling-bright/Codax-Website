import Hero from "../components/hero/Hero";
import GettingStarted from "../components/Home/GettingStarted";
import HeroImage from "../components/Home/images/heroImage/HeroImage.png";
import About from "../components/Home/About";
import Mission from "../components/Home/Mission";
import Services from "../components/Home/Services";
import Achievement from "../components/Home/Achievement";
import LearnFromHome from "../components/Home/LearnFromHome";
import Tutor from "../components/Home/Tutor";
import AboutTeam from "../components/Home/AboutTheTeam";

const HomePage = () => (
  <>
    <Hero HeroImage={HeroImage} plainHeadingText="Become a" coloredHeadingText="World Class" dynamicHeadingText="Software Developer"/>
    <GettingStarted />
    <About />
    <Mission />
    <Services />
    <Achievement />
    <LearnFromHome />
    <Tutor />
    <AboutTeam />
  </>
);

export default HomePage;
