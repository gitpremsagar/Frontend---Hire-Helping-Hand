import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { envVars } from "../../../Services/envVars";

function ProjectsList() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { serviceCategory, serviceName } = router.query; //serviceCategory and serviceName coresponds to category and sub_category columns in proposals table
        const url = `${envVars.BACKEND_API_ENDPOINT_FOR_PROJECTS}?category=${serviceCategory}&sub_category=${serviceName}`;
        console.log("requsting to - ", url);
        const response = await axios.get(url);
        setProjects(response.data); // assuming the response data is an array of projects
      } catch (error) {
        console.error(error);
      }
    }

    fetchProjects();
  }, [router]);

  return (
    <div>
      <h1>Projects List</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.project_id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Category: {project.category}</p>
            <p>Subcategory: {project.sub_category}</p>
            <p>Delivery Timeframe: {project.delivery_timeframe} days</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsList;
