import React, { useRef } from "react";
import FormElementContainer from "../UI/FormElementContainer";
import LabelElement from "../UI/LabelElement";
import InputInfoSpan from "../UI/InputInfoSpan";
import TextareaElement from "../UI/TextareaElement";

export default function SetDescription({ proposal, setProposal }) {
  const proposalDescriptionRef = useRef();

  function handleDescriptionChange() {
    setProposal((prev) => {
      const updatedProposal = { ...prev };
      updatedProposal.proposalDescription =
        proposalDescriptionRef.current.value;
      return updatedProposal;
    });
  }

  return (
    <FormElementContainer>
      <LabelElement htmlFor="proposalDescription">
        Proposal Description
      </LabelElement>
      <InputInfoSpan>
        Give detailed description of the freelanceing service you provide.
      </InputInfoSpan>
      <TextareaElement
        name="proposalDescription"
        rows={10}
        id="proposalDescription"
        className="w-full"
        textareaRef={proposalDescriptionRef}
        onChangeHandler={handleDescriptionChange}
      />
    </FormElementContainer>
  );
}
