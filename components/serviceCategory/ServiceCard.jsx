import Image from "next/image";
import Link from "next/link";

export default function ServiceCard() {
  return (
    <div className="h-[300px] w-full mb-2 overflow-hidden border-2 border-gray-200 hover:shadow-[0_4px_10px_5px_rgba(0,0,0,0.3)] rounded box-border transition-all ease-linear">
      <div className="grid grid-cols-5">
        {/* thumbnail image */}
        <div className="col-span-2">
          <Image
            width={400}
            height={300}
            src={`/service-offer-images/dummy.jpg`}
            alt="mycustomImage"
            layout="responsive"
            priority={false}
          />
        </div>

        {/* Service offer details */}
        <div className="col-span-3 p-6 ">
          {/* Service title */}
          <Link href={`/service-detail/45`}>
            <a>
              <h3 className="text-xl font-semibold mb-2 cursor-pointer text-blue-600 hover:text-blue-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                veniam?
              </h3>
            </a>
          </Link>
          {/* Offer poster profile name with link */}
          <Link href={`/user-profile/${23}`}>
            <a>
              <div className="flex mb-2">
                <div className="rounded-full w-10 h-10 bg-pink-300 text-center">
                  PS
                </div>
                <div className="">
                  <h6 className="font-bold text-xs ml-2">Freelancer Name</h6>
                  <span className="text-xs ml-2">57 points</span>
                </div>
              </div>
            </a>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            sapiente quo similique, ratione neque quibusdam tenetur cum, laborum
            fuga laboriosam saepe ea officiis esse maxime autem sequi nam ipsam,
            in aperiam cumque. Odio ipsa sit, consequuntur ut nihil
            exercitationem nulla!
          </p>
          <div className="flex justify-between ">
            <div>
              <span className="text-yellow-400 mr-2 text-2xl">* * * * *</span>
              <span className="mr-2">23 Ratings</span>
              <span>3 Answered questions</span>
            </div>
            <div className="flex">
              <button className="flex items-center border-2 border-green-300 px-3 py-2 rounded-full">
                <div className="w-4 h-4 rounded-full bg-green-600 mr-2"></div>
                Chat
              </button>
              <button className="ml-1 items-center border-2 border-green-600 text-green-600 font-semibold px-3 py-2 rounded-full">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
