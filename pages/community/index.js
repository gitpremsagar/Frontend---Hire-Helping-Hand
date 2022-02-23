import Head from "next/head";
import AsideLeftOfCommunity from "../../components/community/AsideLeftOfDashboard";
import styles from "../../styles/Home.module.css";

export default function UserDashboardPage(props) {
  const { loggedInUserInfo } = props;

  return (
    <div className="">
      <Head>
        <title>Community</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="lg:grid lg:grid-cols-12">
        <div className="col-span-2">
          <AsideLeftOfCommunity />
        </div>

        <div className="col-span-10">
          <main className="">
            <p>This is Community page</p>
          </main>
        </div>
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}
