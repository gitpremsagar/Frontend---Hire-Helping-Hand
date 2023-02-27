import Head from "next/head";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import HeroSection from "../components/HeroSection/HeroSection";
import styles from "../styles/Home.module.css";
import AsideLeft from "./../components/Theme/AsideLeft/AsideLeft";

export default function Home(props) {
  const { loggedInUserInfo } = props;

  return (
    <div className="">
      <Head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>
          Hire Helping Hand - Marketplace for Freelancers and Clients
        </title>
        <meta
          name="description"
          content="Hire Helping Hand is a marketplace connecting freelancers and clients to collaborate on projects. Our platform is designed to simplify the hiring process, making it easy for both parties to find the right match. Join us today to get started!"
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
