import React from "react";
import Countdown from "./Countdown";

export default function ProjectCardForFreelancer({ project }) {
  // card for showing the project details styled with tailwind css
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mt-4">
      <div className="bg-gray-200 text-center p-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-700">{project.description}</p>
        <p className="text-green-500">Budget: {project.budget}</p>
        <p className="text-red-500">Deadline: {project.deadline}</p>
        <div className="text-red-500">
          Time Left: <Countdown deadline={project.deadline} />
        </div>
      </div>
      <div className="bg-gray-200 text-center p-2">
        <select
          className="border border-gray-300 rounded p-2 mr-4"
          defaultValue="notStarted"
        >
          <option value="notStarted">Not Started</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </div>
    </div>
  );
}
