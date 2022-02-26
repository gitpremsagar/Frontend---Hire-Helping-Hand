import Head from "next/head";
import AsideLeftOfUserMessages from "../../components/userMessages/AsideLeftOfUserMessages";

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
        </div>

        <div className="col-span-10">
          <main className="">
            <p>Your messages will show up here</p>
          </main>
        </div>
      </div>
    </div>
  );
}
