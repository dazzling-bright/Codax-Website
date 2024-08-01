import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      aria-labelledby="contact-us"
      className="grid md:grid-cols-2 gap-8 p-4"
    >
      <ContactInfo />
      <ContactForm />
    </section>
  );
};

export default Contact;
