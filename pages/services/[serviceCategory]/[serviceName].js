import Head from "next/head";
import { useRouter } from "next/router";
import SearchForm from "../../../components/HeroSection/searchForm";
import ProposalCard from "../../../components/proposal-detail/ProposalCard";
import AsideLeft from "../../../components/Theme/AsideLeft/AsideLeft";
import AsideRight from "../../../components/Theme/AsideRight/AsideRight";
export default function DynamicPage(props) {
  const { loggedInUserInfo } = props;
  const router = useRouter();

  return (
    <div className="">
      <Head>
        <title>Hire Helping Hand</title>
        <meta
          name="description"
          content="Hire helping hand is a platform to hire freelancers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="lg:grid lg:grid-cols-12">
        <div className="col-span-2">
          <AsideLeft />
        </div>

        <div className="col-span-10">
          <main className="">
            <SearchForm />
            <hr />
            <h1 className="font-bold text-center mt-20 text-6xl mb-20 text-gray-800">
              Service -{" "}
              <span className="text-blue-600">{`${router.query.serviceName}`}</span>{" "}
            </h1>
            <div>
              <p className="p-2">Filters</p>
            </div>
            <section className="p-2">
              <ProposalCard />
              <ProposalCard />
              <ProposalCard />
              <ProposalCard />
              <ProposalCard />
              <ProposalCard />
              <ProposalCard />
              <ProposalCard />
              <ProposalCard />
              <ProposalCard />
            </section>

            {/*The following AsideRight was used to show no. of peoples who are online*/}
            {/* <div className="col-span-1">
                <AsideRight />
              </div> */}
          </main>
        </div>
      </div>
    </div>
  );
}
