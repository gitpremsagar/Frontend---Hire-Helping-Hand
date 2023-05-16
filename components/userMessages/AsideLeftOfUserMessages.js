import axios from "axios";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { BACKEND_API_ENDPOINT_FOR_USERS_CHAT_CONTACTS } from "./../../Services/envVars";
import ContactLi from "./ContactLi";

export default function AsideLeftOfUserMessages({
  contacts,
  activeContact,
  setActiveContact,
  setContacts,
  userID,
  jwtToken,
}) {
  const [uniqueSendeRecipientList, setUniqueSendeRecipientList] = useState([]);

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
  // if (!data) console.log("Loading contacts list...");
  if (error) {
    console.log(error); //TODO: Handle error properly
    alert(`Error Occured!\n ${error}`);
  }

  // extract contacts from response
  useEffect(() => {
    if (!data) return setContacts([]);
    const contactList = data.data.map((message) => {
      if (message.sender_id == userID) {
        //add recipient to contact list
        const contact = {
          firstName: message.recipient_first_name,
          lastName: message.recipient_last_name,
          id: message.recipient_id,
          socketID: false,
        };
        return contact;
      } else {
        //add sender to contact list
        const contact = {
          firstName: message.sender_first_name,
          lastName: message.sender_last_name,
          id: message.sender_id,
          socketID: false,
        };
        return contact;
      }
    });
    setUniqueSendeRecipientList(contactList);
  }, [data]);

  //filter out duplicate contacts by id and `setContacts` having only unique contacts
  useEffect(() => {
    if (uniqueSendeRecipientList.length > 0) {
      const uniqueContacts = uniqueSendeRecipientList.filter(
        (obj, index, self) => index === self.findIndex((t) => t.id === obj.id)
      );
      setContacts(uniqueContacts);
    }
  }, [uniqueSendeRecipientList]);

  return (
    <aside className="h-full overflow-y-scroll bg-gray-800 text-white w-full sticky top-12">
      <nav>
        <h4 className="text-lg font-medium m-2">Inbox</h4>
        <ul>
          {contacts.map((contact, key) => {
            return (
              <ContactLi
                key={key}
                contact={contact}
                setActiveContact={setActiveContact}
                activeContact={activeContact}
                contacts={contacts}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
