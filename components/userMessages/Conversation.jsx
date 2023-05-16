import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import useSWR from "swr";
import { BACKEND_API_ENDPOINT_FOR_USERS_CHAT_MESSAGES } from "../../Services/envVars";
import axios from "axios";

export default function Conversation({
  activeContact,
  userID,
  userFirstName,
  jwtToken,
  realTimeChatMessages,
  setRealTimeChatMessages,
  socket,
}) {
  // if no contact is selected
  if (!activeContact) {
    return (
      <div className="flex items-center justify-center h-screen text-4xl text-gray-500">
        Please select a contact to have conversation with.
      </div>
    );
  }
  // console.log("active contact = ", activeContact);

  const [recieverSocketID, setRecieverSocketID] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //handle new message
    socket.on("new-message", (incommingMessage) => {
      setMessages((prev) => {
        const updatedMessages = [...prev, incommingMessage];
        return updatedMessages;
      });
      setRealTimeChatMessages((prev) => {
        const updatedChatMessages = [...prev, incommingMessage];
        return updatedChatMessages;
      });
    });
  }, [socket]);

  const fetcher = async (url) => {
    const response = await axios.get(url, {
      headers: {
        "x-auth-token": jwtToken,
      },
    });
    return response;
  };

  // make request to backend only when `activeContact` id is defined
  const { data, error } = useSWR(
    activeContact
      ? BACKEND_API_ENDPOINT_FOR_USERS_CHAT_MESSAGES + "/" + activeContact[0].id
      : null,
    fetcher
  );

  // TODO: handle loading and error case properly
  // if (!data) console.log("loading messages!");
  if (error) console.log("error occured while fetching messages", error);

  const msgInputRef = useRef();

  function sendMessage(e) {
    e.preventDefault();
    const outgoingMessage = {
      sender_id: userID,
      sender_first_name: userFirstName,
      recipient_id: activeContact[0].id,
      toSocketID: activeContact[0].socketID,
      senderSocketID: socket.id,
      recipient_first_name: activeContact[0].firstName,
      message: msgInputRef.current.value,
      created_at: currentDateTime,
      has_seen: false,
    };
    socket.emit("send-message", outgoingMessage); //send message to chatServer
    //insert sent message to messages list
    const currentDateTime = "2023-05-15T04:57:47.000Z"; //FIXME: provide current date time
    setMessages((prev) => {
      const updatedMessages = [...prev, outgoingMessage];
      return updatedMessages;
    });
    // msgInputRef.current.value = "";
  }

  // handle recipient socket.id submit
  socket.on("set-recipient-socket-id", (msgRecieverInfo) => {
    setRecieverSocketID(msgRecieverInfo.recipientSocketId);
    //FIXME: UPDATE socketID on contacts state hook
  });
  // useEffect(() => {
  //   console.log("recieverSocketID", recieverSocketID);
  // }, [recieverSocketID]);

  // useEffect(() => {
  //   console.log("realTimeChatMessages = ", realTimeChatMessages);
  // }, [realTimeChatMessages]);

  // setMessages when messages fetched from server is recieved
  useEffect(() => {
    if (!data) return; //console.log("loading");
    setMessages(data.data);
  }, [data]);

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
        <form
          className="flex rounded-lg overflow-hidden"
          onSubmit={sendMessage}
        >
          <input
            type="text"
            className="flex-1 p-2 border border-gray-400 rounded-l-lg"
            ref={msgInputRef}
          />
          <button className="bg-blue-500 p-2 text-white">Send</button>
        </form>
      </div>
    </div>
  );
}
