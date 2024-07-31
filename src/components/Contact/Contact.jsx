import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Button from "../general-use/button";

const contactInfo = [
  { icon: <FiPhone />, text: "(+234) 1234-567-890" },
  { icon: <FiMail />, text: "codaxng@gmail.com" },
  {
    icon: <FiMapPin />,
    text: "No 27, Golden Lane off Heavenly Driveway, Lekki, Lagos.",
  },
];

const ContactListItem = ({ icon, text }) => (
  <li className="flex items-center">
    {icon}
    <span className="ml-2">{text}</span>
  </li>
);

const Contact = () => {
  return (
    <section
      aria-labelledby="contact-us"
      className="grid md:grid-cols-2 gap-8 p-4"
    >
      <article className="bg-secondaryColor text-white p-4 rounded-lg shadow-lg">
        <h2 id="contact-us" className="text-lg font-bold mb-4">
          Contact Information
        </h2>
        <p className="mb-4">
          Do you have any questions? Please send us a message and follow us on
          all our social media platforms so that you can receive first hand
          information on all we have in store for you.
        </p>
        <ul className="mb-4 space-y-2">
          {contactInfo.map((info, index) => (
            <ContactListItem key={index} icon={info.icon} text={info.text} />
          ))}
        </ul>
        <figure>
          {/* You can add an image or other relevant content here */}
        </figure>
      </article>

      {/** Input fields */}
      <aside>
        <section className="flex gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="first-name" className="block mb-2">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="last-name" className="block mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </section>

        <section className="flex gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className="block mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </section>

        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2">
            Select Subject
          </label>
          <select
            id="subject"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Choose a subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Write your Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>

        <Button>Send message</Button>
      </aside>
    </section>
  );
};

export default Contact;
