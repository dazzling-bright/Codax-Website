import Button from "../general-use/button";

const NavContent = () => {
  const listItems = ["Home", "Shop", "Blog", "Contact Us"];

  return (
    <nav>
      <ul className="flex flex-col mt-8 md:mt-2 *:self-start md:*:self-center md:flex-row md:justify-end gap-6 lg:gap-8 text-blue-900">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="border-b-4 px-0 py-2 border-transparent hover:opacity-80  hover:ml-4 md:hover:ml-0 hover:border-blue-600 hover:cursor-pointer transition-all duration-300"
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
