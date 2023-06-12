import React, { useRef } from "react";
import FormElementContainer from "../UI/FormElementContainer";
import LabelElement from "../UI/LabelElement";
import InputInfoSpan from "../UI/InputInfoSpan";
import InputText from "../UI/InputText";

export default function SetTitle({ project, setProject }) {
  const projectTitleRef = useRef();

  function handleprojectTitleChange() {
    setProject((prevproject) => {
      const newproject = { ...prevproject };
      newproject.projectTitle = projectTitleRef.current.value;
      return newproject;
    });
  }

  return (
    <FormElementContainer>
      <LabelElement className={`text-white`} htmlFor="projectTitle">
        Project Title
      </LabelElement>
      <InputInfoSpan>
        Please enter a descriptive title for your project. The title should
        provide a concise summary of your project's main objective or purpose.
      </InputInfoSpan>
      <InputText
        name="projectTitle"
        id="projectTitle"
        type="text"
        className="w-full"
        onChangeHandler={handleprojectTitleChange}
        inputRef={projectTitleRef}
      />
    </FormElementContainer>
  );
}
