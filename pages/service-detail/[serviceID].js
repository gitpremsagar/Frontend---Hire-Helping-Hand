import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import FreelancerQualitySection from "../../components/service-detail/freelancer-quality-section";
import SimilarServicesSection from "../../components/service-detail/SimilarServicesSection";
import ServiceDescription from "../../components/service-detail/ServiceDescription";
import SimilarFreelancers from "../../components/service-detail/SimilarFreelancers";

export default function ServiceDetailPage() {
  const router = useRouter();
  //console.log("Router in service detail = ", router);
  return (
    <frameElement>
      {/* Service full detail section */}
      <section className="lg:grid lg:grid-cols-12">
        <aside className="col-span-4">
          <Image
            width={400}
            height={300}
            src={`/service-offer-images/dummy.jpg`}
            alt="mycustomImage"
            layout="responsive"
            priority={false}
          />
        </aside>
        <section className="col-span-5 p-4">
          <main>
            <h1 className="text-4xl">
              Service Detail Page for {router.query.serviceID}
            </h1>
            <Link href={"/user-profile/34"}>
              <a className="text-blue-500">
                Visit the Prem Sagar Service Store
              </a>
            </Link>
            <br />
            <span>4.3 </span>
            <span className="text-yellow-400">****</span>
            <br />
            <span>1000 Ansered questions</span>

            <hr className="mt-2 mb-2" />
            <span className="text-red-700">-30%</span>
            <h6>500/-</h6>
            <hr className="mt-2 mb-2" />
            {/* service description */}
            <ServiceDescription />
          </main>
        </section>
        <aside className="col-span-3 p-2">
          <div className="border-2 rounded-md border-gray-400 p-4">
            <h6>500/-</h6>
            <p>
              Get it done by{" "}
              <span className="font-bold">Monday, 3 January</span>
            </p>
            <p>
              Or fastest delivery by Sunday, 1 January{" "}
              <span className="font-bold">Monday 3, January</span>
            </p>
            <p>
              Sold by <span>The Seller Profile</span> and Fulfilled by Hire
              Helping Hand
            </p>
            <div className="bg-amber-400 rounded-md p-4 text-center">
              Add to Cart
            </div>
            <div className="bg-amber-500 mt-2 rounded-md p-4 text-center">
              Order Now
            </div>
          </div>
        </aside>
      </section>

      <hr />
      <FreelancerQualitySection />

      <hr />
      <SimilarServicesSection />

      <hr />
      <SimilarFreelancers />

      <hr />
      <FreelancerQualitySection />
    </frameElement>
  );
}
