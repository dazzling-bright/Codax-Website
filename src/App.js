import Nav from "./components/header/nav";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <main className="px-4 md:px-8 lg:px-8 bg-primary max-w-[96rem] mx-auto">
      <Nav />
      <Hero />
    </main>
  );
}

export default App;
