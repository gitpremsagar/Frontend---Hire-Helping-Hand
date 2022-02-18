import Image from "next/image";
import Link from "next/link";

export default function ServiceCard() {
  return (
    <div className="h-[300px] w-full mb-2 overflow-hidden border-2 border-gray-200 hover:border-blue-600 rounded box-border transition-all ease-linear">
      <div className="grid grid-cols-5">
        {/* thumbnail image */}
        <div className="col-span-2">
          <Image
            width={400}
            height={300}
            src={`/service-offer-images/dummy.jpg`}
            alt="mycustomImage"
            layout="responsive"
          />
        </div>

        {/* Service offer details */}
        <div className="col-span-3 p-6 ">
          <Link href={`/`}>
            <h3 className="text-xl font-semibold mb-2 cursor-pointer text-blue-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              veniam?
            </h3>
          </Link>
          <div className="flex mb-2">
            <div className="rounded-full w-10 h-10 bg-pink-300 text-center">
              PS
            </div>
            <div className="">
              <h6 className="font-bold text-xs ml-2">Freelancer Name</h6>
              <span className="text-xs ml-2">57 points</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            sapiente quo similique, ratione neque quibusdam tenetur cum, laborum
            fuga laboriosam saepe ea officiis esse maxime autem sequi nam ipsam,
            in aperiam cumque. Odio ipsa sit, consequuntur ut nihil
            exercitationem nulla!
          </p>
        </div>
      </div>
    </div>
  );
}
