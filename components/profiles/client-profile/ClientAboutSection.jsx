import React from "react";
import { Pencil } from "../../svg/heroicons";

const handleBioEditingRequest = () => {
  console.log("Bio editing pencil clicked!");
};

export default function ClientAboutSection() {
  return (
    <section className="bg-white py-16 px-8">
      <div className="text-lg font-bold mb-4 flex">
        About Me
        <Pencil
          className={`w-5 h-5 ml-2 text-blue-400 hover:text-green-400 hover:cursor-pointer`}
          onClickHandler={handleBioEditingRequest}
        />
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </div>
    </section>
  );
}
