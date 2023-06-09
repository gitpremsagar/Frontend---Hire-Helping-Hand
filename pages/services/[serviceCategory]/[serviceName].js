import Head from "next/head";
import { useRouter } from "next/router";
import SearchForm from "../../../components/HeroSection/searchForm";
// import AsideLeft from "../../../components/Theme/AsideLeft/AsideLeft";
import ProposalsList from "../../../components/services/proposals/ProposalsList";
import ProjectsList from "../../../components/services/projects/ProjectsList";
// import { extractParamsFromURL } from "./../../../Services/extractParamsFromURL";
import AsideLeftNew from "../../../components/Theme/AsideLeft/AsideLeftNew";

export default function DynamicPage(props) {
  const { loggedInUserInfo, isUserFreelancer, setisUserFreelancer } = props;
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

      {/* Navigation Bar */}

      <div className="lg:grid lg:grid-cols-12">
        <div className="col-span-2">
          {/* <AsideLeft {...props} /> */}
          <AsideLeftNew />
        </div>

        <div className="col-span-10">
          <main className="">
            <SearchForm {...props} />
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
