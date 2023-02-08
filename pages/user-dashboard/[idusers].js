import Head from "next/head";
import AsideLeftOfDashboard from "../../components/userDashboard/AsideLeftOfDashboard";
import styles from "../../styles/Home.module.css";

export default function UserDashboardPage(props) {
  const { loggedInUserInfo } = props;

  return (
    <div className="">
      <Head>
        <title>Dashboard</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="lg:grid lg:grid-cols-12">
        <div className="col-span-2">
          <AsideLeftOfDashboard />
        </div>

        <div className="col-span-10">
          <main className="">
            <p>This is Dashboard</p>
          </main>
        </div>
      </div>
    </div>
  );
}
