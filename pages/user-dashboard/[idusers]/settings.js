import Head from "next/head";
import AsideLeftOfDashboard from "../../../components/userDashboard/AsideLeftOfDashboard";
import { useRouter } from "next/router";

export default function UserDashboardPage(props) {
  const router = useRouter();

  const { loggedInUserInfo } = props;

  return (
    <div className="">
      <Head>
        <title>Settings</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="lg:grid lg:grid-cols-12">
        <div className="col-span-2">
          <AsideLeftOfDashboard />
        </div>

        <div className="col-span-10">
          <main className="">
            <p>this is new page for iduser = {router.query.idusers}</p>
          </main>
        </div>
      </div>
    </div>
  );
}
