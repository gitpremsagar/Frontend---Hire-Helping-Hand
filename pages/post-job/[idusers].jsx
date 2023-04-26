import Head from "next/head";
import { useState } from "react";
import axios from "axios";

export default function becomeFreelancer() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleProjectSubmit = async (event) => {
    event.preventDefault();

    console.log("Project form data = ", formData);

    // submit the proposal form
    // try {
    //   const response = await axios.post("/api/submit-form", formData);
    //   console.log("Form submitted successfully", response.data);
    // } catch (error) {
    //   console.error("Error submitting form", error);
    // }
  };
  return (
    <div>
      <Head>
        <title>Post a job</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gray-800 text-white">
          <h1 className="text-center font-bold text-6xl p-20">
            Create New Project
          </h1>
        </div>
      </main>
    </div>
  );
}
