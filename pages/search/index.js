import Head from "next/head";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchPage from "../../components/search/SearchPageVersion3";
import AsideLeft from "../../components/Theme/AsideLeft/AsideLeft";

export default function Home(props) {
  const { loggedInUserInfo } = props;

  return (
    <div className="">
      <Head>
        <title>Search Result</title>
        {/* <meta
          name="description"
          content="Hire helping hand is a platform to hire freelancers"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="lg:grid lg:grid-cols-12">
        <div className="col-span-2">
          <AsideLeft />
        </div>

        <div className="col-span-10">
          <main className="">
            <HeroSection />
            <hr />
            <SearchPage />
          </main>
        </div>
      </div>
    </div>
  );
}
