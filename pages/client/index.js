import Head from "next/head";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import AsideRight from "../../components/Theme/AsideRight/AsideRight";
import styles from "../../styles/Home.module.css";
import AsideLeft from "./../../components/Theme/AsideLeft/AsideLeft";

export default function Home() {
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
          <HeroSection />
          <main className="grid grid-cols-10">
            <div className="col-span-8">
              <CategoriesSection />
            </div>

            <div className="col-span-2">
              <AsideRight />
            </div>
          </main>
        </div>
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}
