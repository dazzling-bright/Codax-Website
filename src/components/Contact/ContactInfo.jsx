import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import ContactListItem from "./ContactListItem";
import SocialIcons from "./SocialIcons";

const contactInfo = [
  { icon: <FiPhone />, text: "(+234) 1234-567-890" },
  { icon: <FiMail />, text: "codaxng@gmail.com" },
  {
    icon: <FiMapPin />,
    text: "No 27, Golden Lane off Heavenly Driveway, Lekki, Lagos.",
  },
];

const ContactInfo = () => (
  <article className="bg-secondaryColor text-white p-4 flex flex-col justify-between rounded-lg shadow-lg">
    <h2 id="contact-us" className="text-lg font-bold mb-4">
      Contact Information
    </h2>
    <p className="mb-4 leading-6">
      Do you have any questions? Please send us a message and follow us on all
      our social media platforms so that you can receive first hand information
      on all we have in store for you.
    </p>
    <ul className="mb-4 space-y-2">
      {contactInfo.map((info, index) => (
        <ContactListItem key={index} icon={info.icon} text={info.text} />
      ))}
    </ul>
    <SocialIcons />
  </article>
);

export default ContactInfo;
