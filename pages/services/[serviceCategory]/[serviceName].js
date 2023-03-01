import Head from "next/head";
import { useRouter } from "next/router";
import SearchForm from "../../../components/HeroSection/searchForm";
import AsideLeft from "../../../components/Theme/AsideLeft/AsideLeft";
import { useEffect, useState } from "react";
import ProposalsList from "../../../components/services/proposals/ProposalsList";
import ProjectsList from "../../../components/services/projects/ProjectsList";

export default function DynamicPage(props) {
  const { loggedInUserInfo } = props;
  const router = useRouter();
  const [currentPathname, setcurrentPathname] = useState("/");

  // get current pathname and store it in the state `currentPathname`
  useEffect(() => {
    const pathName = router.pathname;
    setcurrentPathname(pathName);
  }, [router]);

  // set `isUserFreelancer` state based on `useHireHelpingHandAs` param value in url
  const [isUserFreelancer, setisUserFreelancer] = useState(false);
  useEffect(() => {
    const { query } = router;
    const useHireHelpingHandAs = query.useHireHelpingHandAs || "client"; //Note that we're also setting a default value of client for the `useHireHelpingHand` parameter in case it's not present in the URL. This ensures that our code doesn't break if the parameter is not provided.
    setisUserFreelancer(useHireHelpingHandAs === "freelancer");
  }, [router]);

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
              {isUserFreelancer
                ? `Projects Posted by Clients`
                : `Proposals from Freelancers`}{" "}
              -{" "}
              <span className="text-blue-600">{`${router.query.serviceName}`}</span>{" "}
            </h1>
            <div>
              <p className="p-2">Filters</p>
            </div>
            <section className="p-2">
              {isUserFreelancer ? <ProjectsList /> : <ProposalsList />}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
