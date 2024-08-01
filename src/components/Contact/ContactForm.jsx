import React from "react";
import Button from "../general-use/button";

const ContactForm = () => (
  <aside>
    <form className="font-custom-black">
      <section className="flex gap-4 mb-4 ">
        <div className="flex-1">
          <label htmlFor="first-name" className="block mb-2 font-bold">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            placeholder="John"
            className="w-full py-2 border-b border-gray-300 rounded-none focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="last-name" className="block mb-2 font-bold">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            placeholder="Doe"
            className="w-full py-2 border-b border-gray-300 rounded-none focus:outline-none"
          />
        </div>
      </section>

      <section className="flex gap-4 mb-4">
        <div className="flex-1">
          <label htmlFor="email" className="block mb-2 font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="xyz@gmail.com"
            className="w-full py-2 border-b border-gray-300 rounded-none focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="phone" className="block mb-2 font-bold">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="(+234) 70 3208 2725"
            className="w-full py-2 border-b border-gray-300 rounded-none focus:outline-none"
          />
        </div>
      </section>
      <div className="mb-4">
        <p className="block mb-2 font-bold">Select Subject</p>
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <label className="flex items-center mb-2 lg:mb-0">
            <input
              type="checkbox"
              name="subject"
              value="general"
              className="mr-2"
            />
            General Inquiry
          </label>
          <label className="flex items-center mb-2 lg:mb-0">
            <input
              type="checkbox"
              name="subject"
              value="support"
              className="mr-2"
            />
            Support
          </label>
          <label className="flex items-center mb-2 lg:mb-0">
            <input
              type="checkbox"
              name="subject"
              value="feedback"
              className="mr-2"
            />
            Feedback
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-bold">
          Write your Message
        </label>
        <textarea
          id="message"
          placeholder="Enter your message"
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
        ></textarea>
      </div>

      <div className="text-right">
        <Button>Send message</Button>
      </div>
    </form>
  </aside>
);

export default ContactForm;
