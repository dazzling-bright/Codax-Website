import Button from "../general-use/button";
import { Link } from "react-router-dom";

const NavContent = () => {
  const listItems = ["Home", "Shop", "Blog", "Contact Us"];

  return (
    <nav>
      <ul className="flex flex-col mt-8 md:mt-2 *:self-start md:*:self-center md:flex-row md:justify-end gap-4 lg:gap-10 text-custom-black">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="border-b-4 py-2 border-transparent  hover:ml-4 md:hover:ml-0 hover:border-orange-300 hover:cursor-pointer hover:text-orange-400 transition-all duration-300"
          >
            <Link to={`${item.toLowerCase()}`} className="" tabIndex={0}>
              {item}
            </Link>
          </li>
        ))}
        <Button className="text-white">Purchase now</Button>
      </ul>
    </nav>
  );
};

export default NavContent;
