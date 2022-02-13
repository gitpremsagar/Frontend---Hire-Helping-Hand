import Head from "next/head";
import { useRouter } from "next/router";
import HeroSection from "../../components/HeroSection/HeroSection";
import AsideLeft from "../../components/Theme/AsideLeft/AsideLeft";
import styles from "../../styles/Home.module.css";
export default function DynamicPage() {
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
            <HeroSection />
            <hr />
            <h1>
              This page is for{" "}
              {`${router.query.serviceCategory}/${router.query.serviceName}`}
            </h1>
          </main>
        </div>
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}
