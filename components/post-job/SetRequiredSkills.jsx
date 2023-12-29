import React, { useEffect, useRef, useState } from "react";
import InputText from "../UI/InputText";

import H5 from "../UI/H5";
import Tag from "../sellService/Tag";
import InputInfoSpan from "../UI/InputInfoSpan";

export default function SetRequiredSkills({ project, setProject }) {
  const [requiredSkills, setRequiredSkill] = useState([]);

  //   update project with requiredSkills info
  useEffect(() => {
    setProject((prev) => {
      const updatedProposal = { ...prev };
      updatedProposal.requiredSkills = requiredSkills;
      return updatedProposal;
    });
  }, [requiredSkills]);

  const tagInputRef = useRef();

  const handleAddNewTag = (e) => {
    e.preventDefault();
    if (tagInputRef.current.value) {
      setRequiredSkill([...requiredSkills, tagInputRef.current.value]);
      tagInputRef.current.value = "";
    }
  };

  const handleDeleteTag = (index) => {
    console.log("delete requiredSkill called", index);
    setRequiredSkill(requiredSkills.filter((tag, i) => i !== index));
  };

  return (
    <div className="text-white my-5">
      <H5 className={`mb-10`}>Add Required Skills</H5>
      {/* mapping requiredSkills */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-5">
        {requiredSkills.map((tag, index) => {
          return (
            <Tag
              tag={tag}
              key={index}
              index={index}
              onClickHandler={handleDeleteTag}
            />
          );
        })}
      </div>
      <InputInfoSpan>
        Specify the skills, qualifications, or expertise that are essential for
        this job. This helps us match your project with the most suitable
        freelancers. To add skills, write the name of the skill and press "Add
        Skill" button. You can add multipule skills.
      </InputInfoSpan>
      {/* form for adding new requiredSkills */}
      <div className="flex items-center justify-start">
        <InputText
          type="text"
          name={`requiredSkill`}
          inputRef={tagInputRef}
          placeholder={`Write required skills`}
        />
        <button
          onClick={handleAddNewTag}
          className="bg-blue-500 rounded-lg px-3 py-2 min-w-fit"
        >
          Add Skill
        </button>
      </div>
    </div>
  );
}
