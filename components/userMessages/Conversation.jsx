import React, { useEffect, useState } from "react";
import Message from "./Message";
import useSWR from "swr";
import { BACKEND_API_ENDPOINT_FOR_USERS_CHAT_MESSAGES } from "../../Services/envVars";
import axios from "axios";

export default function Conversation({
  activeContactID,
  userID,
  jwtToken,
  messages,
  setMessages,
}) {
  // console.log("activeContactID = ", activeContactID);
  // if no contact is selected
  if (!activeContactID) {
    return (
      <div className="flex items-center justify-center h-screen text-4xl text-gray-500">
        Please select a contact to have conversation with.
      </div>
    );
  }

  const fetcher = async (url) => {
    const response = await axios.get(url, {
      headers: {
        "x-auth-token": jwtToken,
      },
    });
    return response;
  };

  // make request to backend only when `activeContactID` id is defined
  const { data, error } = useSWR(
    activeContactID
      ? BACKEND_API_ENDPOINT_FOR_USERS_CHAT_MESSAGES + "/" + activeContactID
      : null,
    fetcher
  );

  // TODO: handle loading and error case properly
  // if (!data) console.log("loading messages!");
  if (error) console.log("error occured while fetching messages", error);

  function handleSendMessage(e) {
    e.preventDefault();
    console.log(userID);
  }

  useEffect(() => {
    if (!data) return; //console.log("loading");

    setMessages(data.data);
  }, [data]);

  // const from = "someone";

  return (
    <div className="flex flex-col h-[calc(100vh-70px)]">
      <div className="p-6 bg-white border-b border-gray-400">
        Name of selected Contact
      </div>
      <div className="flex-1 overflow-y-scroll p-6">
        {messages.map((message, key) => {
          return (
            <Message
              key={key}
              messageType={message.sender_id == userID ? `sent` : `recieved`}
              message={message.message}
              from={message.sender_first_name}
            />
          );
        })}
      </div>
      <div className="p-6 bg-gray-100 ">
        <form className="flex rounded-lg overflow-hidden">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-400 rounded-l-lg"
          />
          <button
            className="bg-blue-500 p-2 text-white"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
