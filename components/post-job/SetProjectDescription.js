import React, { useRef } from "react";
import FormElementContainer from "../UI/FormElementContainer";
import LabelElement from "../UI/LabelElement";
import InputInfoSpan from "../UI/InputInfoSpan";
import TextareaElement from "../UI/TextareaElement";

export default function SetDescription({
  project,
  setProject,
  setDidUserType,
}) {
  const projectDescriptionRef = useRef();

  function handleDescriptionChange() {
    setProject((prev) => {
      const updatedproject = { ...prev };
      updatedproject.projectDescription = projectDescriptionRef.current.value;
      if (projectDescriptionRef.current.value == "") {
        setDidUserType(false);
      } else {
        setDidUserType(true);
      }

      return updatedproject;
    });
  }

  return (
    <FormElementContainer>
      <LabelElement className={`text-white`} htmlFor="projectDescription">
        Project Description
      </LabelElement>
      <InputInfoSpan>
        Please provide a detailed description of your project. Include
        information such as the project scope, requirements, objectives, and any
        specific instructions for freelancers. The more detailed and clear your
        description, the better freelancers can understand your project and
        provide accurate proposals.
      </InputInfoSpan>
      <TextareaElement
        name="projectDescription"
        rows={10}
        id="projectDescription"
        className="w-full"
        textareaRef={projectDescriptionRef}
        onChangeHandler={handleDescriptionChange}
      />
    </FormElementContainer>
  );
}
