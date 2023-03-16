import React, { Fragment, useEffect, useState } from "react";
import RatingStars from "../../../components/profiles/RatingStars";
import TestimonialSection from "../../../components/profiles/TestimonialSection";
import { useRouter } from "next/router";
import axios from "axios";
import { envVars } from "./../../../Services/envVars";
import { Pencil } from "../../../components/svg/heroicons";
import ProjectsSection from "../../../components/profiles/client-profile/projectsSection";
import LookingForSkillsSection from "../../../components/profiles/client-profile/LookingForSkillsSection";
import ClientAboutSection from "../../../components/profiles/client-profile/ClientAboutSection";
import ClientProfilePic from "../../../components/profiles/client-profile/ClientProfilePic";
import FreelancerProfilePic from "./../../../components/profiles/freelancer-profile/FreelancerProfilePic";
import FreelancerAboutSection from "../../../components/profiles/freelancer-profile/FreelancerAboutSection";
import FreelancerSkillsSection from "../../../components/profiles/freelancer-profile/FreelancerSkillsSection";
import ProposalsSection from "../../../components/profiles/freelancer-profile/ProposalsSection";

export default function ClientProfilePage(props) {
  const { loggedInUserInfo, jwt } = props;
  const router = useRouter();

  const [userDetail, setuserDetail] = useState([]);

  async function getUserInfoFromAPI() {
    const userIdOnUrl = router.query.idusers;

    // make request to api to get information about the user with the id given in the url
    try {
      const response = await axios(
        `${envVars.BACKEND_API_FOR_USERS}/${userIdOnUrl}`
      );
      setuserDetail(response.data);
    } catch (error) {
      // recieved error from backend
      if (error.response)
        return console.log("Error in getting the user information = ", error);
      // Unknown error
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
        // send profile pic and token to api
        const response = await axios(
          `${envVars.BACKEND_API_ENDPOINT_FOR_UPLOADING_CLIENT_AVATAR}/${loggedInUserInfo.idusers}`,
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
          // change freelancer profile pic image url in loggedInUserInfo state
          setuserDetail((prevUserDetail) => {
            const newUserDetail = [...prevUserDetail];
            newUserDetail[0].profile_pic_as_client = newAvatarUrl;
            // console.log("new user detail = ", newUserDetail);
            return newUserDetail;
          });
        }
      } catch (error) {
        if (error.response.data.error == "File size too large!")
          return alert(
            "Image larger than 2MB is not accepted as profile picture!"
          ); // FIXME: handle image too large error properly
        if (error.response.data.error == "Invalid file format!")
          return alert("You can upload only jpg file as profile picture"); //FIXME: handle invalid image format properly
        alert(
          "Error occured! Please make sure you are connected to the internet!"
        );
      }
    });
    fileInput.click();
  };

  // handle profile name editing request
  function handleProfileNameEditPencilClick() {
    console.log("Edit profile name clicked");
  }

  return (
    <Fragment>
      {userDetail.map((user, index) => {
        return (
          <div className="flex flex-col w-full" key={index}>
            {/* client profile hero section */}
            <section className="bg-gray-100 py-16 px-8">
              <div className="flex items-center">
                <FreelancerProfilePic
                  src={`${envVars.BACKEND_API_ENDPOINT_FOR_PROFILE_PIC}${user.profile_pic_as_client}`}
                  onUpload={handleUpload}
                  {...props}
                />

                <div className="flex text-2xl font-bold ml-10 ">
                  {`${user.first_name} ${user.last_name}`}
                  <Pencil
                    className={`w-5 h-5 ml-2 mt-2 text-blue-400 hover:text-green-400 hover:cursor-pointer`}
                    onClickHandler={handleProfileNameEditPencilClick}
                  />{" "}
                </div>
              </div>
              <RatingStars rating={4} />
            </section>

            {/* Freelancer's About Section */}
            <FreelancerAboutSection />

            {/* Freelancer's skills Section */}
            <FreelancerSkillsSection />

            {/* portfolio section */}
            <ProposalsSection />

            <TestimonialSection />
          </div>
        );
      })}
    </Fragment>
  );
}
