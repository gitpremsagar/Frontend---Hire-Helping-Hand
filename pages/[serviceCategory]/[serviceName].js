import Head from "next/head";
import { useRouter } from "next/router";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServiceCard from "../../components/serviceCategory/serviceCard";
import AsideLeft from "../../components/Theme/AsideLeft/AsideLeft";
import AsideRight from "../../components/Theme/AsideRight/AsideRight";
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
            <h1 className="font-bold text-center mt-20 text-6xl mb-20 text-gray-800">
              Service -{" "}
              <span className="text-blue-600">{`${router.query.serviceName}`}</span>{" "}
            </h1>

            <div className="grid grid-cols-5">
              <section className="col-span-4 p-2 pt-0">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
              </section>
              <div className="col-span-1">
                <AsideRight />
              </div>
            </div>
          </main>
        </div>
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}
