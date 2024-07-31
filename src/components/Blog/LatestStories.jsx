import CareerGrowth from "./images/career.png";
import ChatBot from "./images/chatbot.png";
import Ai from "./images/ai.png";
import Piracy from "./images/piracy.png";
import WebDev from "./images/webDev.png";
import OpenSource from "./images/openSource.png";

const LatestStories = () => {
  const storyCategories = [
    "All",
    "Career and Growth",
    "Community",
    "Trending",
    "Upskilling",
  ];

  const storyData = [
    {
      buttonText: "Career and Growth",
      date: "10 Nov 2022",
      title: "Is Coding a Difficult Skill to Learn?",
      image: CareerGrowth,
    },
    {
      buttonText: "Community",
      date: "1 Oct 2022",
      title: "The Secret Life of Chatbots",
      image: ChatBot,
    },
    {
      buttonText: "Trending",
      date: "05 Jan 2023",
      title: "AI and How it is Used in Software Engineering",
      image: Ai,
    },
    {
      buttonText: "Trending",
      date: "22 Feb 2023",
      title: "How to Protect Yourself from Software Piracy",
      image: Piracy,
    },
    {
      buttonText: "Upskilling",
      date: "30 Mar 2023",
      title: "Become a Well Paid Web Developer in Seven Easy Steps",
      image: WebDev,
    },
    {
      buttonText: "Upskilling",
      date: "15 Apr 2023",
      title: "Leveraging Open Source as a Newbie in Tech",
      image: OpenSource,
    },
  ];

  return (
    <section aria-labelledby="latest-stories-heading">
      <header className="bg-secondaryColor py-8 text-white md:px-20 rounded-2xl mb-8">
        <h2 id="latest-stories-heading" className="text-lg font-bold px-4">
          Latest Stories
        </h2>
        <ul className="flex justify-between flex-wrap gap-8 mt-6 font-bold">
          {storyCategories.map((category, index) => (
            <li
              key={index}
              className="hover:text-orange-300 focus:text-orange-300 cursor-pointer flex-1 px-4 transition-all duration-300"
              tabIndex="0"
              aria-label={`Category: ${category}`}
            >
              {category}
            </li>
          ))}
        </ul>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-24 px-16 gap-8 sm:gap-x-24">
        {storyData.map((story, index) => (
          <StoryCard key={index} {...story} />
        ))}
      </main>
    </section>
  );
};

export default LatestStories;

/** Button */
const CardButton = ({ buttonText }) => {
  return (
    <button className="text-custom-royal-blue bg-white border-custom-royal-blue border-2 px-2 font-bold rounded-lg shadow-lg transition-all duration-300 py-4 flex-1 hover:bg-custom-royal-blue hover:text-white hover:opacity-90">
      {buttonText}
    </button>
  );
};

const StoryCard = ({ buttonText, date, title, image }) => {
  return (
    <article
      className="flex flex-col rounded-2xl shadow-lg p-2 my-8"
      aria-labelledby={`story-title-${title}`}
    >
      <figure className="shadow-lg">
        <img
          src={image}
          alt={title}
          className="rounded-2xl object-cover block w-full"
        />
      </figure>
      <p className="flex justify-between items-center my-4 gap-2">
        <CardButton buttonText={buttonText} />
        <span className="text-slate-400 flex-1 text-center">{date}</span>
      </p>
      <p id={`story-title-${title}`} className="font-bold text-custom-black">
        {title}
      </p>
    </article>
  );
};
