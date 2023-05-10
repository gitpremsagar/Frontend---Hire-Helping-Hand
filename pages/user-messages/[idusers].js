import Head from "next/head";
import AsideLeftOfUserMessages from "../../components/userMessages/AsideLeftOfUserMessages";
// import LeftNav from "./../../components/userMessages/LeftNav";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Conversation from "../../components/userMessages/Conversation";

const socket = io("http://localhost:3015", {
  autoConnect: false,
});
// const socket = io("http://localhost:3015");

export default function UserMessagesPage(props) {
  const router = useRouter();
  const userID = useSelector((state) => state.authSlice.userid);

  const [loggedInUserId, setLoggedInUserId] = useState(false);
  useEffect(() => {
    setLoggedInUserId(userID);
  }, [userID]);

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
  const [contacts, setContacts] = useState(["Person 1", "person 2"]);

  return (
    <div className="">
      <Head>
        <title>Messages</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="lg:grid lg:grid-cols-12">
        <div className="col-span-2">
          <AsideLeftOfUserMessages
            contacts={contacts}
            activeContactID={activeContactID}
            setActiveContactID={setActiveContactID}
          />
        </div>

        <div className="col-span-10">
          <main className="">
            <Conversation activeContactID={activeContactID} />
          </main>
        </div>
      </div>
    </div>
  );
}
