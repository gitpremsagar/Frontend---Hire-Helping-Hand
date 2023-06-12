import React, { useRef } from "react";
import LabelElement from "../UI/LabelElement";
import InputInfoSpan from "../UI/InputInfoSpan";
import InputText from "../UI/InputText";

export default function SetProjectBudget({ project, setProject }) {
  const projectBudgetRef = useRef();

  function handleBudgetchange() {
    setProject((prevproject) => {
      const newproject = { ...prevproject };
      newproject.projectBudget = projectBudgetRef.current.value;
      return newproject;
    });
  }
  return (
    <div>
      <LabelElement className={`text-white`} htmlFor="projectBudget">
        Project Budget
      </LabelElement>
      <InputInfoSpan className="text-yellow-300">
        Please indicate the budget for your project. This helps freelancers
        understand the financial scope of your project
      </InputInfoSpan>
      <InputText
        name="projectBudget"
        id="projectBudget"
        type="number"
        className="w-full"
        inputRef={projectBudgetRef}
        onChangeHandler={handleBudgetchange}
      />
    </div>
  );
}
