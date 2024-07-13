import AboutUs from "./components/body/About";
import AboutTeam from "./components/body/AboutTheTeam";
import Achievement from "./components/body/Achievement";
import GettingStarted from "./components/body/GettingStarted";
import MissionAndVision from "./components/body/Mission";
import Services from "./components/body/Services";
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
      <AboutTeam />
    </main>
  );
}

export default App;
