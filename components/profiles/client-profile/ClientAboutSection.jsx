import React from "react";
import EditButton from "../EditButton";

export default function ClientAboutSection() {
  const handleBioEditingRequest = () => {
    console.log("Edit about clicked!");
  };
  return (
    <div className="bg-white py-16 px-8">
      <div className="text-lg font-bold mb-4 flex">
        About Me
        <EditButton onClickHandler={handleBioEditingRequest} />
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </div>
    </div>
  );
}
