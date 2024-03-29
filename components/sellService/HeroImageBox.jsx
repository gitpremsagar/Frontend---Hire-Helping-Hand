import Image from "next/image";
import React, { useState } from "react";
import {
  BACKEND_API_FOR_UPLOADING_PROPOSAL_IMAGES,
  BASE_URL_FOR_PROPOSAL_IMAGES,
} from "../../Services/envVars";
import axios from "axios";
import { useSelector } from "react-redux";

export default function HeroImageBox({ proposal, setProposal }) {
  // get token from the redux store
  const token = useSelector((state) => state.authSlice.jwtToken);

  const [imageURL, setImageURL] = useState(
    proposal.heroImageName === ""
      ? ``
      : `${BASE_URL_FOR_PROPOSAL_IMAGES}/${proposal.heroImageName}`
  );
  const isImageAvailable = imageURL === "" ? false : true; //if no hero image is available then set it to false

  function uploadHeroImage() {
    // if title of the proposal is not set then dont allow user to upload thumbnail
    if (proposal.proposalTitle === "")
      return alert("Set proposal title first.");

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", async () => {
      const image = fileInput.files[0];
      if (!image) return;

      // upload the image
      const formData = new FormData();
      formData.append("proposalHeroImage", image);
      formData.append("proposal_id", proposal.proposalID);
      formData.append("serial_number", 1);

      try {
        const response = await axios(
          BACKEND_API_FOR_UPLOADING_PROPOSAL_IMAGES,
          {
            method: "POST",
            data: formData,
            headers: {
              "x-auth-token": token,
            },
          }
        );
        const uploadedImageName = response.data;
        // update proposal state to add hero image name to it
        setProposal((prev) => {
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
  // TODO: use Image from next/image
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
          <span className="block">Upload Thumbnail Image/Video</span>
          <span className="block">(Aspect Ratio 1:1)</span>
        </div>
      )}
    </div>
  );
}
