import React from "react";
import FreelancerProfilePic from "./FreelancerProfilePic";
import { envVars } from "../../../Services/envVars";
import EditButton from "../EditButton";
import RatingStars from "../RatingStars";
import axios from "axios";

export default function FreelancerHeroSection(props) {
  const { user, loggedInUserInfo, jwt, setuserDetail } = props;

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

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="flex items-center">
        <FreelancerProfilePic
          src={`${envVars.BACKEND_API_ENDPOINT_FOR_GETTING_FREELANCER_PROFILE_PIC}/${user.profile_pic_as_freelancer}`}
          alt="Freelancer Profile Pic"
          onUpload={handleUpload}
          {...props}
        />

        <div className="flex text-2xl font-bold ml-10 ">
          {`${user.first_name} ${user.last_name}`}

          <EditButton onClickHandler={handleProfileNameEditPencilClick} />
        </div>
      </div>
      <RatingStars rating={4} />
    </section>
  );
}
