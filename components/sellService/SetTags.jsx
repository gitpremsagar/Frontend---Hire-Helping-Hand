import React, { useEffect, useRef, useState } from "react";
import InputText from "../UI/InputText";

import H5 from "../UI/H5";
import Tag from "./Tag";

export default function SetTags({ proposal, setProposal }) {
  const [tags, setTags] = useState([]);

  //   update proposal with tags info
  useEffect(() => {
    setProposal((prev) => {
      const updatedProposal = { ...prev };
      updatedProposal.tags = tags;
      return updatedProposal;
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
            <Tag
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
