import React, { useRef } from "react";
import FormElementContainer from "../UI/FormElementContainer";
import LabelElement from "../UI/LabelElement";
import InputInfoSpan from "../UI/InputInfoSpan";
import InputText from "../UI/InputText";

export default function SetTitle({ proposal, setProposal }) {
  function handleProposalTitleChange() {
    setProposal((prevProposal) => {
      const newProposal = { ...prevProposal };
      newProposal.proposalTitle = proposalTitleRef.current.value;
      return newProposal;
    });
  }

  const proposalTitleRef = useRef();

  return (
    <FormElementContainer>
      <LabelElement htmlFor="proposalTitle">Proposal Title</LabelElement>
      <InputInfoSpan>
        Give the title for the freelanceing service you provide.
      </InputInfoSpan>
      <InputText
        name="proposalTitle"
        id="proposalTitle"
        type="text"
        className="w-full"
        onChangeHandler={handleProposalTitleChange}
        inputRef={proposalTitleRef}
      />
    </FormElementContainer>
  );
}
