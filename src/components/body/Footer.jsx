import { NewsLetter } from "./Newsletter";

const FooterSection = ({ title, links }) => (
  <section className="py-4 flex-col justify-between">
    <h2 className="mb-8 font-bold text-xl">{title}</h2>
    <ul className="">
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <a
            href={link.href}
            className="hover:underline transition-all duration-200 break-words"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

const Footer = () => {
  const sections = [
    {
      title: "Reach us",
      links: [
        { href: "/", text: "+101234567889" },
        { href: "/", text: "codaxng@gmail.com" },
        {
          href: "/",
          text: "No 27, Golden Lane, off Heavenly Driveway, Lekki, Lagos.",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/", text: "About" },
        { href: "/", text: "Blog" },
        { href: "/", text: "Contact Us" },
        { href: "/", text: "Shop" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/", text: "Privacy policy" },
        { href: "/", text: "Terms & Services" },
        { href: "/", text: "Terms of Use" },
        { href: "/", text: "Refund Policy" },
      ],
    },
    {
      title: "Follow us on socials",
      links: [
        { href: "/", text: "Facebook" },
        { href: "/", text: "Twitter" },
        { href: "/", text: "Instagram" },
        { href: "/", text: "LinkedIn" },
      ],
    },
  ];

  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center lg:text-left gap-4 px-4 md:px-12 py-8 bg-custom-black text-white">
      <h3 className="col-span-1 md:col-span-2 lg:col-span-5 font-bold text-4xl py-12 border-0 border-b-4 border-b-white  md:w-full text-left">
        Codax
      </h3>
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col">
          <FooterSection title={section.title} links={section.links} />
        </div>
      ))}
      <div className="flex flex-col md:items-start">
        <NewsLetter />
      </div>
    </footer>
  );
};

export default Footer;
