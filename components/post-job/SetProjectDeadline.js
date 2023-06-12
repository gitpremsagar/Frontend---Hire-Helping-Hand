import React, { useRef } from "react";
import LabelElement from "../UI/LabelElement";
import InputInfoSpan from "../UI/InputInfoSpan";
import InputText from "../UI/InputText";

export default function SetProjectDeadline({ project, setProject }) {
  // TODO: You can provide a dropdown menu with predefined options such as "Less than a week," "1-2 weeks," "1 month," "2 months," etc., allowing clients to select the duration that aligns with their project's requirements. Alternatively, you can provide an input field where clients can enter a specific date or timeline.
  const projectDeadlineRef = useRef();

  function handleDeadlinechange() {
    setProject((prevproject) => {
      const newproject = { ...prevproject };
      newproject.projectDeadline = projectDeadlineRef.current.value;
      return newproject;
    });
  }
  return (
    <div>
      <LabelElement className={`text-white`} htmlFor="projectDeadline">
        Project Deadline
      </LabelElement>
      <InputInfoSpan className="text-yellow-300">
        Please select the estimated deadline for your project. This indicates
        the desired timeframe within which you expect the project to be
        completed.
      </InputInfoSpan>
      <InputText
        name="projectDeadline"
        id="projectDeadline"
        type="number"
        className="w-full"
        inputRef={projectDeadlineRef}
        onChangeHandler={handleDeadlinechange}
      />
    </div>
  );
}
