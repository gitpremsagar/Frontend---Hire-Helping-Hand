import { useState } from "react";
import axios from "axios";
import H5 from "../UI/H5";
import { BACKEND_API_ENDPOINT_FOR_UPLOADING_PROJECT_ATTACHMENT_FILES } from "../../Services/envVars";
import InputInfoSpan from "../UI/InputInfoSpan";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("projectAttachmentFile", selectedFile);

    try {
      await axios.post(
        BACKEND_API_ENDPOINT_FOR_UPLOADING_PROJECT_ATTACHMENT_FILES,
        formData
      );
      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="text-white">
      <H5 className={`my-10`}>{`Attach files (optional)`}</H5>
      <InputInfoSpan>
        If you have any documents, reference materials, or files related to your
        project, please upload them here.{" "}
      </InputInfoSpan>
      <input type="file" onChange={handleFileChange} />
      <button
        className="rounded bg-blue-500 hover:bg-blue-600 px-3 py-2"
        onClick={handleFileUpload}
      >
        Upload File
      </button>
    </div>
  );
}
