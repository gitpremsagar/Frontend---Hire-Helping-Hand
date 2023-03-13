import React, { Fragment, useEffect, useState } from "react";
import FreelancerAvatar from "../../../components/profiles/FreelancerAvatar";
import RatingStars from "../../../components/profiles/RatingStars";
import TestimonialSection from "../../../components/profiles/TestimonialSection";
import { useRouter } from "next/router";
import axios from "axios";
import { envVars } from "./../../../Services/envVars";
import { Pencil } from "../../../components/svg/heroicons";

export default function ClientProfilePage(props) {
  const { loggedInUserInfo, isUserFreelancer, setisUserFreelancer } = props;
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
      console.log(response.data);
    } catch (error) {
      console.log("error in getting user information = ", error);
    }
  }

  useEffect(() => {
    router.query.idusers && getUserInfoFromAPI();
  }, [router.query.idusers]);

  // console.log("user id in url on client profile page = ", userIdOnUrl);
  // function handleUpload() {
  //   console.log("Change Avatar clicked!");

  // }

  // handle avatar change/upload request
  const handleUpload = async () => {
    console.log("Change Avatar clicked!");
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
          envVars.BACKEND_API_ENDPOINT_FOR_UPLOADING_FREELANCER_AVATAR,
          {
            method: "POST",
            data: formData,
          }
        );
        if (response.ok) {
          const newAvatarUrl = await response.text();
          // FIXME: update the avatar image on the page
        } else {
          console.error("Failed to upload avatar");
        }
      } catch (error) {
        console.error("Failed to upload avatar:", error);
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
    <Fragment>
      {userDetail.map((user, index) => {
        return (
          <div className="flex flex-col w-full" key={index}>
            <div className="bg-gray-100 py-16 px-8">
              <div className="flex items-center">
                <FreelancerAvatar
                  src="https://via.placeholder.com/150"
                  alt="User Avatar"
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
            </div>
            <div className="bg-white py-16 px-8">
              <div className="text-lg font-bold mb-4 flex">
                About Me
                <Pencil
                  className={`w-5 h-5 ml-2 text-blue-400 hover:text-green-400 hover:cursor-pointer`}
                  onClickHandler={handleBioEditingRequest}
                />
              </div>
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
                  <div className="text-sm font-medium mt-2">
                    Portfolio Item 1
                  </div>
                </div>
                <div className="p-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Portfolio Item 2"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="text-sm font-medium mt-2">
                    Portfolio Item 2
                  </div>
                </div>
                <div className="p-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Portfolio Item 3"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="text-sm font-medium mt-2">
                    Portfolio Item 3
                  </div>
                </div>
              </div>
            </div>

            <TestimonialSection />
          </div>
        );
      })}
    </Fragment>
  );
}
