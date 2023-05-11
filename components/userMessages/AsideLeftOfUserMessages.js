import axios from "axios";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { BACKEND_API_ENDPOINT_FOR_USERS_CHAT_CONTACTS } from "./../../Services/envVars";
import { useSelector } from "react-redux";

export default function AsideLeftOfUserMessages({
  contacts,
  activeContactID,
  setActiveContactID,
  setContacts,
  userID,
}) {
  const contactIdRef = useRef();
  const handleContactClick = () => {
    setActiveContactID(contactIdRef.current.value);
  };

  // get jwt token from redux store
  const jwtToken = useSelector((state) => state.authSlice.jwtToken);

  // get list of all contacts from api if jwtToken and userID available
  const fetcher = async (url) => {
    const response = await axios.get(url, {
      headers: {
        "x-auth-token": jwtToken,
      },
    });
    return response;
  };
  const { data, error } = useSWR(
    !jwtToken || !userID ? null : BACKEND_API_ENDPOINT_FOR_USERS_CHAT_CONTACTS, //make request only if jwtToken and userID is fetched from redux store
    fetcher
  );

  //TODO: indicate loading state to users
  if (!data) console.log("Loading contacts list...");
  if (error) {
    console.log(error);
    // alert(`Error Occured!\n ${error}`);
  }

  // setContacts list when got response from server
  useEffect(() => {
    if (!data) return setContacts([]);
    const contactList = data.data.map((message) => {
      if (message.sender_id == userID) {
        return message.recipient_first_name;
      } else return message.sender_first_name;
    });
    setContacts(contactList);
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (!data && jwtToken) {
      // Fetch data from server
    }
  }, [data, jwtToken]);

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
