import AboutUs from "./components/body/About";
import AboutTeam from "./components/body/AboutTheTeam";
import Achievement from "./components/body/Achievement";
import Footer from "./components/body/Footer";
import GettingStarted from "./components/body/GettingStarted";
import LearnFromHome from "./components/body/LearnFromHome";
import MissionAndVision from "./components/body/Mission";
import Services from "./components/body/Services";
import Tutor from "./components/body/Tutor";
import Nav from "./components/header/nav";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <main className=" max-w-[96rem] mx-auto">
      <Nav />
      <Hero />
      <GettingStarted />
      <AboutUs />
      <MissionAndVision />
      <Services />
      <Achievement />
      <LearnFromHome />
      <Tutor />
      <AboutTeam />
      <Footer />
    </main>
  );
}

export default App;
