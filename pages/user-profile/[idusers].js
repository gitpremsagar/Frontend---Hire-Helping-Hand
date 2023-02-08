import React, { Fragment } from "react";
import FreelancerAvatar from "../../components/user-profile/FreelancerAvatar";
import RatingStars from "../../components/user-profile/RatingStars";
import TestimonialSection from "../../components/user-profile/TestimonialSection";

export default function UserPofilePgae() {
  return (
    <Fragment>
      <div className="flex flex-col w-full">
        <div className="bg-gray-100 py-16 px-8">
          <div className="flex items-center">
            <FreelancerAvatar />
            <div className="text-2xl font-bold">User Name</div>
          </div>
          <RatingStars rating={4} />
        </div>

        <div className="bg-white py-16 px-8">
          <div className="text-lg font-bold mb-4">About Me</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </div>
        </div>

        <div className="bg-white py-16 px-8">
          <div className="text-lg font-bold mb-4">Skills</div>
          <div className="flex flex-wrap">
            <div className="bg-gray-200 py-2 px-4 mr-4 mb-4 text-sm font-medium">
              Skill 1
            </div>
            <div className="bg-gray-200 py-2 px-4 mr-4 mb-4 text-sm font-medium">
              Skill 2
            </div>
            <div className="bg-gray-200 py-2 px-4 mr-4 mb-4 text-sm font-medium">
              Skill 3
            </div>
          </div>
        </div>

        <div className="bg-white py-16 px-8">
          <div className="text-lg font-bold mb-4">Portfolio</div>
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
        </div>

        <TestimonialSection />
      </div>
    </Fragment>
  );
}
