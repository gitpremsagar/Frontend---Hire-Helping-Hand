import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { BACKEND_API_FOR_UPLOADING_PROPOSAL_IMAGES } from "../../Services/envVars";

export default function UploadImageButton({ proposal, setProposal }) {
  // get token from redux store
  const token = useSelector((state) => state.authSlice.jwtToken);

  // is uploading extra images
  const [isUploadingExtraImages, setIsUploadingExtraImages] =
    React.useState(false);

  const uploadExtraImages = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = false;
    input.click();
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        console.log(file);
        setProposal((prev) => {
          return {
            ...prev,
            extraImagesName: [...prev.extraImagesName, file.name],
          };
        });
      }
    };

    const formData = new FormData();
    for (let i = 0; i < input.files.length; i++) {
      formData.append("proposalHeroImage", input.files[i]);
    }
    formData.append("proposal_id", proposal.proposalID);
    formData.append("serial_number", proposal.extraImagesName.length + 2);

    // use axios try catch to upload the images with token, proposal_id and serial_number
    try {
      const res = await axios.post(
        BACKEND_API_FOR_UPLOADING_PROPOSAL_IMAGES,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": token,
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={uploadExtraImages}
      className="w-full h-full text-white text-lg rounded-xl bg-blue-400  hover:bg-blue-600 flex flex-col justify-center items-center min-h-[150px] sm:min-h-[200px]  lg:min-h-[300px] cursor-pointer"
    >
      <span className="block">Upload more images</span>
      <span className="block">(Aspect Ratio 1:1)</span>
    </div>
  );
}
