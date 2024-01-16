import Head from "next/head";
import { useRouter } from "next/router";
import AsideLeftOfDashboard from "../../../../components/userDashboard/AsideLeftOfDashboard";
export default function OngoingProjectsPage(props) {
  const router = useRouter();

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
            <p>This is Dashboard of {router.query.idusers}</p>
            <p>Ongoing projects page.</p>
          </main>
        </div>
      </div>
    </div>
  );
}
