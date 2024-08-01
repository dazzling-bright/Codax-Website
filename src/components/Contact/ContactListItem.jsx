import React from "react";

const ContactListItem = ({ icon, text }) => (
  <li className="flex items-center">
    {icon}
    <span className="ml-2">{text}</span>
  </li>
);

export default ContactListItem;
