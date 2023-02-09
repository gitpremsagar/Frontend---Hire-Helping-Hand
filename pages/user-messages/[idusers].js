import Head from "next/head";
import AsideLeftOfUserMessages from "../../components/userMessages/AsideLeftOfUserMessages";
import LeftNav from "./../../components/userMessages/LeftNav";

export default function UserMessagesPage(props) {
  const { loggedInUserInfo } = props;

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
                  <button className="bg-blue-500 p-2 text-white">Send</button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}