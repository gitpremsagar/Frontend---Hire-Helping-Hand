import React, { useEffect, useRef, useState } from "react";
import InputText from "../UI/InputText";

import H5 from "../UI/H5";
import ProjectTag from "./ProjectTag";

export default function SetProjectTags({ project, setProject }) {
  const [tags, setTags] = useState([]);

  //   update project with tags info
  useEffect(() => {
    setProject((prev) => {
      const updatedProject = { ...prev };
      updatedProject.tags = tags;
      return updatedProject;
    });
  }, [tags]);

  const tagInputRef = useRef();

  const handleAddNewTag = (e) => {
    e.preventDefault();
    if (tagInputRef.current.value) {
      setTags([...tags, tagInputRef.current.value]);
      tagInputRef.current.value = "";
    }
  };

  const handleDeleteTag = (index) => {
    console.log("delete tag called", index);
    setTags(tags.filter((tag, i) => i !== index));
  };

  return (
    <div className="text-white my-5">
      <H5>Add tags</H5>
      {/* mapping tags */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-5">
        {tags.map((tag, index) => {
          return (
            <ProjectTag
              tag={tag}
              key={index}
              index={index}
              onClickHandler={handleDeleteTag}
            />
          );
        })}
      </div>
      {/* form for adding new tags */}
      <div className="flex items-center justify-start">
        <InputText
          type="text"
          name={`tag`}
          inputRef={tagInputRef}
          placeholder={`Write tag`}
        />
        <button
          onClick={handleAddNewTag}
          className="bg-blue-500 rounded-lg px-3 py-2 min-w-fit"
        >
          Add Tag
        </button>
      </div>
    </div>
  );
}
