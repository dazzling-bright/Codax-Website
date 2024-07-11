import AboutUs from "./components/body/About";
import GettingStarted from "./components/body/GettingStarted";
import MissionAndVision from "./components/body/Mission";
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
    </main>
  );
}

export default App;
