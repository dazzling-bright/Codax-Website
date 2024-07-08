import { BiMenuAltRight } from "react-icons/bi";

const Nav = () => {
  const listItems = ["Home", "Shop", "Blog", "Contact Us"];

  return (
    <header className="flex justify-between py-4 text-xl items-center">
      <h1 className="w-auto font-extrabold text-4xl">Codax</h1>
      <nav className="w-2/3 px-2">
        <ul className="flex justify-between items-center">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="border-b-4 border-transparent hover:border-orange-600 hover:cursor-pointer transition-all duration-300 p-2 "
            >
              {item}
            </li>
          ))}

          <button className="bg-blue-800 capitalize text-white border-2 py-2 px-4 font-bold border-blue-500 rounded-lg hover:bg-white hover:text-blue-500 shadow-md transition-all duration-300">
            Purchase Now
          </button>
        </ul>
      </nav>
      <figure className="text-4xl text-blue-500 hover:text-blue-400 hover:cursor-pointer border-transparent border-4 rounded-lg hover:shadow-lg hover:border-4 hover:border-blue-400 hover:opacity-80 transition-all duration-300 ">
        <BiMenuAltRight />
      </figure>
    </header>
  );
};

export default Nav;
