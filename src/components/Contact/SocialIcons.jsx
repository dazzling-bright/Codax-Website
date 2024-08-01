import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const socialIcons = [
  { icon: <FaInstagram />, key: "instagram" },
  { icon: <FaTwitter />, key: "twitter" },
  { icon: <FaFacebook />, key: "facebook" },
  { icon: <FaLinkedin />, key: "linkedin" },
];

const SocialIcons = () => (
  <figure className="grid grid-cols-4 place-items-center text-xl my-8">
    {socialIcons.map(({ icon, key }) => (
      <span
        key={key}
        className="text-white hover:text-orange-300 hover:translate-y-1 p-4 duration-300 cursor-pointer"
      >
        {icon}
      </span>
    ))}
  </figure>
);

export default SocialIcons;
