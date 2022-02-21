import Head from "next/head";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import HeroSection from "../components/HeroSection/HeroSection";
import styles from "../styles/Home.module.css";
import AsideLeft from "./../components/Theme/AsideLeft/AsideLeft";

export default function Home(props) {
  const { loggedInUserInfo } = props;
  console.log(loggedInUserInfo);
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
            <CategoriesSection />
          </main>
        </div>
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}

// FIXME:
// 1. components\login\LoginForm.js
// 2. components\signup\SignupForm.js
// TODO: 3. pages\_app.js
