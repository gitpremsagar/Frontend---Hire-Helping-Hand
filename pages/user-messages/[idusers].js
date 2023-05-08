import Head from "next/head";
import AsideLeftOfUserMessages from "../../components/userMessages/AsideLeftOfUserMessages";
// import LeftNav from "./../../components/userMessages/LeftNav";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

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
      socket.connect();
      function greetHandler(data) {
        console.log("chatServer data = ", data);
      }

      socket.on("greet", greetHandler);

      socket.on("connect", () => {
        console.log("Your socket.id = ", socket.id);
        console.log("userid on connect = ", userID);
        socket.emit("Submit User ID", userID);
      });

      socket.on("new user connected", (data) => {
        console.log(data);
      });

      socket.on("a user disconnected", (data) => {
        console.log(data);
      });
    } else {
      socket.off("greet", greetHandler);
      socket.disconnect();
    }
    return () => {
      socket.off("greet", greetHandler);
      socket.disconnect();
    };
  }, [userID]);

  // connect to socket.io server only when userId of loggedin user is available in the redux store
  // useEffect(() => {
  //   console.log(loggedInUserId);
  //   loggedInUserId && socket.connect();
  //   return () => {};
  // }, [loggedInUserId]);

  function handleSendMessage(e) {
    e.preventDefault();
    console.log(userID);
  }

  return (
    <div className="">
      <Head>
        <title>Messages</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="lg:grid lg:grid-cols-12">
        <div className="col-span-2">
          <AsideLeftOfUserMessages />
          {/* <LeftNav /> */}
        </div>

        <div className="col-span-10">
          <main className="">
            <div className="flex flex-col h-screen">
              <div className="p-6 bg-white border-b border-gray-400">
                Chat with User
              </div>
              <div className="flex-1 overflow-y-scroll p-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    User: Hi, how are you?
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    You: I'm good, thanks! How about you?
                  </p>
                </div>
              </div>
              <div className="p-6 bg-gray-100">
                <form className="flex">
                  <input
                    type="text"
                    className="flex-1 p-2 border border-gray-400"
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
          </main>
        </div>
      </div>
    </div>
  );
}
