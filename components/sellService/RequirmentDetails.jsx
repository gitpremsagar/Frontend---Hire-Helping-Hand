import React, { useEffect, useState, useRef } from "react";
import InputText from "../UI/InputText";
import FormElementContainer from "../UI/FormElementContainer";
import ButtonPrimary from "../UI/ButtonPrimary";
import H5 from "../UI/H5";

export default function RequirmentDetails({ proposal, setProposal }) {
  const [requirmentsList, setrequirmentsList] = useState([]);

  useEffect(() => {
    setProposal((prev) => {
      const updatedProposal = { ...prev };
      updatedProposal.requirments = requirmentsList;
      return updatedProposal;
    });
  }, [requirmentsList]);

  const requirementInputRef = useRef();

  function handleAddNewRequirement(e) {
    e.preventDefault();
    const newRequirement = requirementInputRef.current.value;
    setrequirmentsList([...requirmentsList, newRequirement]);
    requirementInputRef.current.value = "";
  }
  return (
    <FormElementContainer className={`text-white mt-10`}>
      <H5>List all things that you require before starting the work:</H5>
      {requirmentsList.map((requirment, index) => (
        <div key={index} className="mb-5 text-lg font-semibold">
          <span className="mr-2">{index + 1}. </span>
          {requirment}
        </div>
      ))}

      {/* form for adding new requirments to the list */}
      <div>
        <InputText
          inputRef={requirementInputRef}
          type="text"
          placeholder="Add a new requirement"
        />
        <ButtonPrimary onClickHandler={handleAddNewRequirement}>
          Add
        </ButtonPrimary>
      </div>
    </FormElementContainer>
  );
}
