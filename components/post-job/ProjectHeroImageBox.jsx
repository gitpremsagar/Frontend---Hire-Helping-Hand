import Image from "next/image";
import React, { useState } from "react";
import {
  BACKEND_API_FOR_UPLOADING_PROPOSAL_IMAGES,
  BASE_URL_FOR_PROPOSAL_IMAGES,
} from "../../Services/envVars";
import axios from "axios";

export default function ProjectHeroImageBox({ project, setProject }) {
  const [imageURL, setImageURL] = useState(
    project.heroImageName === ""
      ? ``
      : `${BASE_URL_FOR_PROPOSAL_IMAGES}/${project.heroImageName}`
  );
  const isImageAvailable = imageURL === "" ? false : true; //if no hero image is available then set it to false

  function uploadHeroImage() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", async () => {
      const image = fileInput.files[0];
      if (!image) return;

      // upload the image
      const formData = new FormData();
      formData.append("projectHeroImage", image);

      try {
        const response = await axios(
          BACKEND_API_FOR_UPLOADING_PROPOSAL_IMAGES,
          {
            method: "POST",
            data: formData,
            headers: {
              "x-auth-token": "token", //FIXME: provide auth token
            },
          }
        );
        const uploadedImageName = response.data;
        // update project state to add hero image name to it
        setProject((prev) => {
          const updatedProposal = { ...prev };
          updatedProposal.heroImageName = uploadedImageName;
          return updatedProposal;
        });

        // update hero image url imageURL
        setImageURL(`${BASE_URL_FOR_PROPOSAL_IMAGES}/${uploadedImageName}`);
      } catch (error) {
        alert(`Error occured \n${error.message}`);
        console.log(error);
      }
    });

    fileInput.click();
  }
  return (
    <div>
      {isImageAvailable ? (
        <img
          src={imageURL}
          alt="image"
          className="w-full h-full text-white text-lg rounded-xl bg-blue-400  hover:bg-blue-600 flex flex-col justify-center items-center min-h-[300px] cursor-pointer"
        />
      ) : (
        <div
          onClick={uploadHeroImage}
          className="w-full h-full text-white text-lg rounded-xl bg-blue-400  hover:bg-blue-600 flex flex-col justify-center items-center min-h-[150px] sm:min-h-[200px]  lg:min-h-[300px] cursor-pointer"
        >
          <span className="block">Upload Image </span>
          <span className="block">(Aspect Ratio 1:1)</span>
        </div>
      )}
    </div>
  );
}
