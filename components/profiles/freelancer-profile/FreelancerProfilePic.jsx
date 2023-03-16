import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const FreelancerProfilePic = ({ src, onUpload, loggedInUserInfo }) => {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);
  const [isUserLookingAtOwnProfile, setisUserLookingAtOwnProfile] =
    useState(false);

  // is the user looking at her own profile when she is logged in
  useEffect(() => {
    if (!router.query.idusers || !loggedInUserInfo) return;
    loggedInUserInfo.idusers == router.query.idusers
      ? setisUserLookingAtOwnProfile(true)
      : null;
  }, [router, loggedInUserInfo]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block w-[200px] h-[200px]"
    >
      <img
        src={src}
        alt="Freelancer Profile Pic"
        className="object-cover rounded-full"
      />
      {isHovered && isUserLookingAtOwnProfile && (
        <div className="absolute inset-0 bg-gray-700 opacity-75 flex items-center justify-center">
          <button
            onClick={onUpload}
            className="bg-white py-2 px-4 rounded text-gray-800 hover:bg-gray-300"
          >
            Change Freelancer Avatar
          </button>
        </div>
      )}
    </div>
  );
};

export default FreelancerProfilePic;
