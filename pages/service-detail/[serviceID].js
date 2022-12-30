import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailPage() {
  const router = useRouter();
  console.log("Router in service detail = ", router);
  return (
    <div className="lg:grid lg:grid-cols-12">
      <div className="col-span-4 h-screen bg-slate-600">
        <Image
          width={400}
          height={300}
          src={`/service-offer-images/dummy.jpg`}
          alt="mycustomImage"
          layout="responsive"
          priority={false}
        />
      </div>
      <div className="col-span-5 h-screen p-4">
        <h1 className="text-4xl">
          Service Detail Page for {router.query.serviceID}
        </h1>
        <Link href={"/user-profile/34"}>
          <a className="text-blue-500">Visit the Prem Sagar Service Store</a>
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
        <p>this is the description</p>
      </div>
      <div className="col-span-3 h-screen p-2">
        <div className="border-2 rounded-md border-gray-400 p-4">
          <h6>500/-</h6>
          <p>
            Delivery by <span className="font-bold">Monday, 3 January</span>
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
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
}
