import Head from "next/head";
import AsideLeftOfUserMessages from "../../components/userMessages/AsideLeftOfUserMessages";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Conversation from "../../components/userMessages/Conversation";

const socket = io("http://localhost:3015", {
  autoConnect: false,
});

export default function UserMessagesPage(props) {
  const router = useRouter();
  const userID = useSelector((state) => state.authSlice.userid);
  const jwtToken = useSelector((state) => state.authSlice.jwtToken);

  useEffect(() => {
    if (userID) {
      socket.connect(); //connect to the chatServer when userID of Logged in user is available in redux store

      socket.on("connect", () => {
        // submit this user's userID when this user gets connected to chatServer
        socket.emit("Submit User ID", userID);
      });

      // whenever anyone connects to the chatServer do following
      socket.on("new user connected", (data) => {
        console.log(data);
      });

      // whenever anyone gets disconnected from the chatServer do following
      socket.on("a user disconnected", (data) => {
        console.log(data);
      });
    } else {
      // user is not logged in so disconnect her from the chatServer
      socket.disconnect();
    }
    return () => {
      // disconnect from chatServer whenever this component get unmounted
      socket.disconnect();
    };
  }, [userID]);

  const [activeContactID, setActiveContactID] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);

  return (
    <div className="">
      <Head>
        <title>Messages</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="lg:grid lg:grid-cols-12 lg:h-[calc(100vh-70px)]">
        <div className="col-span-2">
          <AsideLeftOfUserMessages
            contacts={contacts}
            activeContactID={activeContactID}
            setActiveContactID={setActiveContactID}
            setContacts={setContacts}
            userID={userID}
            jwtToken={jwtToken}
          />
        </div>

        <div className="col-span-10">
          <main className="">
            <Conversation
              activeContactID={activeContactID}
              userID={userID}
              jwtToken={jwtToken}
              messages={messages}
              setMessages={setMessages}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
