import Head from "next/head";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "../../styles/Home.module.css";
import AsideLeft from "./../../components/Theme/AsideLeft/AsideLeft";

export default function Home(props) {
  const { loggedInUserInfo } = props;

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
            <HeroSection />
            <hr />
            Here should be something.
          </main>
        </div>
      </div>
    </div>
  );
}

// FIXME:
// 1. components\login\LoginForm.js
// 2. components\signup\SignupForm.js
// 3. When the backend server is not running the frontend app is getting crashed (while logging in). Fix it by proper error handlling

// TODO: 3. make logout system work
