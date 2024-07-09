import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import NavContent from "./navContent";
import handleToggle from "./menuToggle";

const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <header className="flex flex-col md:flex-row md:items-center text-xl w-full">
      <div className="flex justify-between py-4 w-full md:w-auto items-center">
        <h1 className="font-extrabold text-4xl text-blue-500">Codax</h1>
        <figure
          className="text-4xl text-blue-500 hover:text-blue-400 hover:cursor-pointer border-transparent border-4 rounded-lg hover:shadow-lg hover:border-4 hover:border-blue-400 hover:opacity-80 transition-all duration-300 md:hidden"
          onClick={() => handleToggle(setIsNavVisible, isNavVisible)}
        >
          {isNavVisible ? <IoClose /> : <BiMenuAltRight />}
        </figure>
      </div>
      <div
        className={`w-full ${
          isNavVisible ? "block" : "hidden"
        } md:block`}
      >
        <NavContent />
      </div>
    </header>
  );
};

export default Nav;
