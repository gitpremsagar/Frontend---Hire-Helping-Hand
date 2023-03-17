import React, { Fragment } from "react";
import FreelancerAvatar from "../../../components/profiles/FreelancerAvatar";
import RatingStars from "../../../components/profiles/RatingStars";
import TestimonialSection from "../../../components/profiles/TestimonialSection";
import { useRouter } from "next/router";

export default function FreelancerProfilePage(props) {
  // FIXME: if user id is not present in url or is not a number redirect to 404 page
  const { loggedInUserInfo, isUserFreelancer, setisUserFreelancer } = props;
  const router = useRouter();
  const userIdOnUrl = router.query.idusers;

  // is user logged in?
  if (loggedInUserInfo) {
    // is the user requesting for her own profile
    if (userIdOnUrl == loggedInUserInfo.idusers) {
      // show her own profile info with edit options
      // give option to preview her own profile as someone else
    } else {
      // show profile info of requested user without edit options
    }
  } else {
    // show profile info of requested user without edit options
  }

  console.log("user id in url on freelancer profile page = ", userIdOnUrl);

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
