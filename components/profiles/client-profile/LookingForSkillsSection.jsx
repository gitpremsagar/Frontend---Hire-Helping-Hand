import React from "react";

export default function LookingForSkillsSection() {
  return (
    <section className="bg-white py-16 px-8">
      <h3 className="text-lg font-bold mb-4">
        Looking for frelancer with the skills:
      </h3>
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
    </section>
  );
}
