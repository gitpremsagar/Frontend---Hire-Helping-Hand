import React from "react";
import Message from "./Message";

export default function Conversation({ activeContactID }) {
  function handleSendMessage(e) {
    e.preventDefault();
    console.log(userID);
  }

  //if no contact is selected
  if (!activeContactID) {
    return (
      <div className="flex items-center justify-center h-screen text-4xl text-gray-500">
        Please select a contact to have conversation with.
      </div>
    );
  }

  const from = "someone";

  return (
    <div className="flex flex-col h-screen">
      <div className="p-6 bg-white border-b border-gray-400">
        Name of selected Contact
      </div>
      <div className="flex-1 overflow-y-scroll p-6">
        <Message
          messageType="recieved"
          message={
            "This is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the message"
          }
          from={from}
        />
        <Message
          messageType="recieved"
          message={"This is the message"}
          from={from}
        />
        <Message messageType="sent" message={"This is the reply"} from={from} />
        <Message
          messageType="sent"
          message={
            " This is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the message"
          }
          from={from}
        />
        <Message messageType="sent" message={"This is the reply"} from={from} />
      </div>
      <div className="p-6 bg-gray-100">
        <form className="flex">
          <input type="text" className="flex-1 p-2 border border-gray-400" />
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
