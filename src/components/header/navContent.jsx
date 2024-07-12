import Button from "../general-use/button";

const NavContent = () => {
  const listItems = ["Home", "Shop", "Blog", "Contact Us"];

  return (
    <nav>
      <ul className="flex flex-col mt-8 md:mt-2 *:self-start md:*:self-center md:flex-row md:justify-end gap-6 md:gap-10 text-custom-black">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="border-b-4  px-0 py-2 border-transparent  hover:ml-4 md:hover:ml-0 hover:border-orange-300 hover:cursor-pointer hover:text-orange-400 transition-all duration-300"
          >
            <a
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="focus:outline-none focus:outline-offset-8 focus:outline-4 focus:outline-inherit"
              tabIndex={0}
            >
              {item}
            </a>
          </li>
        ))}
        <Button className="text-white">Purchase now</Button>
      </ul>
    </nav>
  );
};

export default NavContent;
