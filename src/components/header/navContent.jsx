import Button from "../general-use/button";

const NavContent = () => {
  const listItems = ["Home", "Shop", "Blog", "Contact Us"];

  return (
    <nav>
      <ul className="flex flex-col *:self-start md:flex-row md:justify-end gap-4 lg:gap-8 text-blue-900">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="border-b-4 px-0 border-transparent hover:opacity-80  hover:ml-4 md:hover:ml-0 hover:border-blue-600 hover:cursor-pointer transition-all duration-300 p-2 "
          >
            {item}
          </li>
        ))}
        <Button>Purchase now</Button>
      </ul>
    </nav>
  );
};

export default NavContent;
