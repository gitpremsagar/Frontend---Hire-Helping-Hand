import React from "react";
import ProjectHeroImageBox from "./ProjectHeroImageBox";
import ProjectImageBox from "./ProjectImageBox";

export default function SetProjectThumbnail({ project, setProject }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      <ProjectHeroImageBox project={project} setProject={setProject} />
      <ProjectImageBox />
      <ProjectImageBox />
      <ProjectImageBox />
    </div>
  );
}
