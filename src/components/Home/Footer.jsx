// import { HashLink } from "react-router-hash-link";
// import { NewsLetter } from "./Newsletter";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { SlLocationPin } from "react-icons/sl";
// import { FaFacebook } from "react-icons/fa";
// import { FiTwitter } from "react-icons/fi";
// import { BsLinkedin } from "react-icons/bs";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const FooterSection = ({ title, links }) => (
//   <section className="py-4 flex flex-col justify-between">
//     <h2 className="mb-8 font-bold text-xl">{title}</h2>
//     <ul className="">
//       {links.map((link, index) => (
//         <li key={index} className="mb-2 flex items-center">
//           {link.icon && <span className="mr-2">{link.icon}</span>}
//           {link.href.startsWith("#") ? (
//             <HashLink
//               smooth
//               to={link.href}
//               className="hover:underline transition-all duration-200 "
//             >
//               {link.text}
//             </HashLink>
//           ) : (
//             <Link
//               to={link.href}
//               className="hover:underline transition-all duration-200"
//             >
//               {link.text}
//             </Link>
//           )}
//         </li>
//       ))}
//     </ul>
//   </section>
// );

// const Footer = () => {
//   const sections = [
//     {
//       title: "Reach us",
//       links: [
//         { href: "/", icon: <FaPhoneVolume />, text: "+101234567889" },
//         {
//           href: "/",
//           icon: <MdOutlineMailOutline />,
//           text: "codaxng@gmail.com",
//         },
//         {
//           href: "/",
//           icon: <SlLocationPin />,
//           text: "No 27, Golden Lane, off Heavenly Driveway, Lekki, Lagos.",
//         },
//       ],
//     },
//     {
//       title: "Company",
//       links: [
//         { href: "#about", text: "About" },
//         { href: "services", text: "Blog" },
//         { href: "contact-us", text: "Contact Us" },
//         { href: "shop", text: "Shop" },
//       ],
//     },
//     {
//       title: "Legal",
//       links: [
//         { href: "/", text: "Privacy policy" },
//         { href: "/", text: "Terms & Services" },
//         { href: "/", text: "Terms of Use" },
//         { href: "/", text: "Refund Policy" },
//       ],
//     },
//     {
//       title: "Follow us on socials",
//       links: [
//         { href: "/", text: "Facebook", icon: <FaFacebook /> },
//         { href: "/", text: "Twitter", icon: <FiTwitter /> },
//         { href: "/", text: "Instagram", icon: <FaSquareInstagram /> },
//         { href: "/", text: "LinkedIn", icon: <BsLinkedin /> },
//       ],
//     },
//   ];

//   return (
//     <footer className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-16 py-12 bg-custom-black text-white">
//       <h3 className="col-span-full font-bold text-4xl py-12 border-0 border-b-4 border-b-white w-full text-left">
//         Codax
//       </h3>
//       {sections.map((section, index) => (
//         <div key={index} className="flex flex-col">
//           <FooterSection title={section.title} links={section.links} />
//         </div>
//       ))}
//       <div className="col-span-full mb-12">
//         <NewsLetter />
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { HashLink } from "react-router-hash-link";
import { NewsLetter } from "./Newsletter";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterSection = ({ title, links }) => (
  <section className="py-4 flex flex-col justify-between">
    <h2 className="mb-8 font-bold text-xl">{title}</h2>
    <ul className="">
      {links.map((link, index) => (
        <li key={index} className="mb-2 flex items-center">
          {link.icon && <span className="mr-2">{link.icon}</span>}
          {link.href.startsWith("#") ? (
            <HashLink
              smooth
              to={link.href}
              className="hover:underline transition-all duration-200 "
            >
              {link.text}
            </HashLink>
          ) : (
            <Link
              to={link.href}
              className="hover:underline transition-all duration-200"
            >
              {link.text}
            </Link>
          )}
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
        { href: "/", icon: <FaPhoneVolume />, text: "+101234567889" },
        {
          href: "/",
          icon: <MdOutlineMailOutline />,
          text: "codaxng@gmail.com",
        },
        {
          href: "/",
          icon: <SlLocationPin />,
          text: "No 27, Golden Lane, off Heavenly Driveway, Lekki, Lagos.",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#about", text: "About" },
        { href: "services", text: "Blog" },
        { href: "contact-us", text: "Contact Us" },
        { href: "shop", text: "Shop" },
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
        { href: "/", text: "Facebook", icon: <FaFacebook /> },
        { href: "/", text: "Twitter", icon: <FiTwitter /> },
        { href: "/", text: "Instagram", icon: <FaSquareInstagram /> },
        { href: "/", text: "LinkedIn", icon: <BsLinkedin /> },
      ],
    },
  ];

  return (
    <footer className="bg-custom-black text-white px-8 pb-16 py-12">
      <h3 className="font-bold text-4xl py-12 border-0 border-b-4 border-b-white w-full text-left">
        Codax
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            links={section.links}
          />
        ))}
      </div>
      <div className="mt-12 mb-24">
        <NewsLetter />
      </div>
    </footer>
  );
};

export default Footer;
