import BgImage from "./images/bg-LearnTogether.svg";

function LearnTogether() {
  return (
    <section
      className="flex items-center justify-center my-16 text-center py-8 bg-contain bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${BgImage})`,
        height: "600px", // Set a specific height for the background image
      }}
    >
      <div className="space-y-6">
        <h2 className="font-bold text-2xl">Let's Learn Together!</h2>
        <button className="border-2 py-2 px-4 bg-secondaryColor font-bold border-blue-500 rounded-2xl text-white shadow-lg transition-all transform-gpu duration-300 ease-in-out hover:bg-white hover:text-secondaryColor ">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default LearnTogether;
