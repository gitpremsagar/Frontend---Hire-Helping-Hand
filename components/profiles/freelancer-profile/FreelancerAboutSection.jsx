import React from "react";
import EditButton from "../EditButton";

export default function FreelancerAboutSection() {
  const handleBioEditingRequest = () => {
    console.log("Edit about clicked!");
  };
  return (
    <section className="bg-white py-16 px-8">
      <div className="text-lg font-bold mb-4 flex">
        About Me
        <EditButton onClickHandler={handleBioEditingRequest} />
      </div>
      <div>This is freelancer about section</div>
    </section>
  );
}
