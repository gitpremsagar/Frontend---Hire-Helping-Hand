import React, { useRef } from "react";

export default function ContactLi({
  contact,
  setActiveContact,
  activeContact,
  contacts,
}) {
  const contactIdRef = useRef();
  const handleContactClick = (e) => {
    const clickedContact = contacts.filter(
      (contact) => contact.id === e.target.value
    );
    setActiveContact(clickedContact);
  };
  return (
    <li
      value={contact.id}
      ref={contactIdRef}
      onClick={handleContactClick}
      className={`py-4 px-2 hover:bg-gray-700 ${
        contact.id == activeContact[0].id ? `bg-gray-600` : ``
      }`}
    >
      {contact.firstName}
    </li>
  );
}
