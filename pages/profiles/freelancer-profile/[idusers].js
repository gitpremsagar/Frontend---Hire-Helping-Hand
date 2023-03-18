import React, { Fragment, useEffect, useState } from "react";
import FreelancerAvatar from "../../../components/profiles/FreelancerAvatar";
import RatingStars from "../../../components/profiles/RatingStars";
import TestimonialSection from "../../../components/profiles/TestimonialSection";
import { useRouter } from "next/router";
import axios from "axios";
import { envVars } from "../../../Services/envVars";
import EditButton from "../../../components/profiles/EditButton";
import ClientAboutSection from "../../../components/profiles/client-profile/ClientAboutSection";
import ClientLookingForSkills from "../../../components/profiles/client-profile/ClientLookingForSkills";
import ClientProjetsSection from "../../../components/profiles/client-profile/ClientProjetsSection";
import FreelancerAboutSection from "./../../../components/profiles/freelancer-profile/FreelancerAboutSection";
import FreelancerSkillsSection from "./../../../components/profiles/freelancer-profile/FreelancerSkillsSection";
import FreelancerProposalsSection from "../../../components/profiles/freelancer-profile/FreelancerProposalsSection";
import FreelancerPortfolioSection from "./../../../components/profiles/freelancer-profile/FreelancerPortfolioSection";

export default function FreelancerProfilePage(props) {
  const { loggedInUserInfo, isUserFreelancer, setisUserFreelancer, jwt } =
    props;

  const router = useRouter();

  const [userDetail, setuserDetail] = useState([]);

  async function getUserInfoFromAPI() {
    const userIdOnUrl = router.query.idusers;

    // make request to api to get information about the user
    try {
      const response = await axios(
        `${envVars.BACKEND_API_FOR_USERS}/${userIdOnUrl}`
      );
      setuserDetail(response.data);
    } catch (error) {
      console.log("error in getting user information = ", error);
    }
  }

  useEffect(() => {
    router.query.idusers && getUserInfoFromAPI();
  }, [router.query.idusers]);

  // handle avatar change/upload request
  const handleUpload = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", async () => {
      const file = fileInput.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("avatar", file);

      try {
        const response = await axios(
          `${envVars.BACKEND_API_ENDPOINT_FOR_UPLOADING_FREELANCER_PROFILE_PIC}/${loggedInUserInfo.idusers}`,
          {
            method: "POST",
            data: formData,
            headers: {
              "x-auth-token": jwt,
            },
          }
        );
        if (response.status == 200) {
          const newAvatarUrl = await response.data;
          // console.log("upload response = ", newAvatarUrl);
          setuserDetail((prevUserDetail) => {
            const newUserDetail = [...prevUserDetail];
            newUserDetail[0].profile_pic_as_freelancer = newAvatarUrl;
            return newUserDetail;
          });
        }
      } catch (error) {
        if (error.response.data.error == "File size too large!")
          alert("Image size can not be more than 2MB!");

        if (error.response.data.error == "Invalid file format!")
          alert(
            "Only jpeg images are allowed to be set set as profile picture!"
          );

        // Some Unknown error occurred
        console.error("Failed to upload avatar unknown error :", error);
      }
    });
    fileInput.click();
  };

  // handle profile name editing request
  function handleProfileNameEditPencilClick() {
    console.log("Edit profile name clicked");
  }

  // handle request to edit bio
  function handleBioEditingRequest() {
    console.log("edit bio pencil clicked");
  }

  return (
    <div className="min-h-screen">
      {userDetail.map((user, index) => {
        return (
          <div className="flex flex-col w-full" key={index}>
            {/* Client's Hero Section */}
            <div className="bg-gray-100 py-16 px-8">
              <div className="flex items-center">
                <FreelancerAvatar
                  src={`${envVars.BACKEND_API_ENDPOINT_FOR_GETTING_FREELANCER_PROFILE_PIC}/${user.profile_pic_as_freelancer}`}
                  alt="Freelancer Profile Pic"
                  onUpload={handleUpload}
                  {...props}
                />

                <div className="flex text-2xl font-bold ml-10 ">
                  {`${user.first_name} ${user.last_name}`}

                  <EditButton
                    onClickHandler={handleProfileNameEditPencilClick}
                  />
                </div>
              </div>
              <RatingStars rating={4} />
            </div>

            {/* Freelancer's About me section */}
            <FreelancerAboutSection />

            {/* Freelancer's Skills section */}
            <FreelancerSkillsSection />

            {/* Freelancers Proposals Section */}
            <FreelancerProposalsSection />

            {/* Freelancer's Portfolio section */}
            <FreelancerPortfolioSection />

            {/* Testimonials Section */}
            <TestimonialSection />
          </div>
        );
      })}
    </div>
  );
}
