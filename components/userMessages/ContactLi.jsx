import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function ContactLi({
  contact,
  setActiveContact,
  activeContact,
  contacts,
}) {
  const [selectedContactUserID, setSelectedContactUserID] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!router.query.user_messages__idusers) return;
    setSelectedContactUserID(router.query.user_messages__idusers);
  }, [router]);

  console.log("selectedContactUserID = ", selectedContactUserID);

  const contactIdRef = useRef();
  const handleContactClick = (e) => {
    const clickedContact = contacts.filter(
      (contact) => contact.id === e.target.value
    );
    setActiveContact(clickedContact);
    router.push(`/user-messages/${e.target.value}`);
  };
  useEffect(() => {
    if (!selectedContactUserID) return;
    const clickedContact = contacts.filter(
      (contact) => contact.id == selectedContactUserID
    );
    setActiveContact(clickedContact);
  }, [selectedContactUserID]);
  return (
    <li
      value={contact.id}
      ref={contactIdRef}
      onClick={handleContactClick}
      className={`py-4 px-2 hover:bg-gray-700 cursor-pointer ${
        activeContact && contact.id == activeContact[0].id ? `bg-gray-600` : ``
      }`}
    >
      {contact.firstName}
    </li>
  );
}
