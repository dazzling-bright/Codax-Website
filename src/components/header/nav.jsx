import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import NavContent from "./navContent";
import handleToggle from "./menuToggle";

const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleToggle(setIsNavVisible, isNavVisible);
    }
  };

  return (
    <header className="bg-primary px-4 md:px-8 lg:px-8 flex flex-col py-4 md:flex-row md:items-center text-xl w-full">
      <div className="flex justify-between w-full md:w-auto items-center">
        <h1 className="font-extrabold text-5xl tracking-wider font-impacted text-blue-500">Codax</h1>
        <figure
          className="text-4xl text-blue-500 hover:text-blue-400 hover:cursor-pointer border-transparent border-4 rounded-lg hover:shadow-lg hover:border-4 hover:border-blue-400 hover:opacity-80 transition-all duration-300 md:hidden"
          onClick={() => handleToggle(setIsNavVisible, isNavVisible)}
          onKeyDown={handleKeyPress}
          tabIndex={0}
          role="button"
          aria-expanded={isNavVisible}
          aria-label={isNavVisible ? "Close menu" : "Open menu"}
        >
          {isNavVisible ? <IoClose /> : <BiMenuAltRight />}
        </figure>
      </div>
      <div className={`w-full ${isNavVisible ? "block" : "hidden"} md:block`}>
        <NavContent />
      </div>
    </header>
  );
};

export default Nav;
