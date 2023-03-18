import React from "react";

export default function FreelancerProposalsSection() {
  return (
    <section className="bg-white py-16 px-8">
      <div className="text-lg font-bold mb-4">Proposals</div>
      <div className="grid grid-cols-3 gap-8">
        <div className="p-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Portfolio Item 1"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="text-sm font-medium mt-2">Portfolio Item 1</div>
        </div>
        <div className="p-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Portfolio Item 2"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="text-sm font-medium mt-2">Portfolio Item 2</div>
        </div>
        <div className="p-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Portfolio Item 3"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="text-sm font-medium mt-2">Portfolio Item 3</div>
        </div>
      </div>
    </section>
  );
}
