import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function AsideLeftOfUserMessages({
  contacts,
  activeContactID,
  setActiveContactID,
}) {
  const router = useRouter();
  const contactIdRef = useRef();
  const handleContactClick = () => {
    setActiveContactID(contactIdRef.current.value);
    console.log(contactIdRef.current.value);
  };

  return (
    <aside className="AsideLeftOfDashboard">
      <nav>
        <h4 className="text-lg font-medium m-2">Inbox</h4>
        <ul>
          {contacts.map((contact, key) => {
            return (
              <li
                key={key}
                value={3}
                ref={contactIdRef}
                onClick={handleContactClick}
              >
                {contact}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
