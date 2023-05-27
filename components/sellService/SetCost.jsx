import React, { useRef } from "react";
import LabelElement from "../UI/LabelElement";
import InputInfoSpan from "../UI/InputInfoSpan";
import InputText from "../UI/InputText";

export default function ({ proposal, setProposal }) {
  const proposalCostRef = useRef();

  function handleCostchange() {
    setProposal((prevProposal) => {
      const newProposal = { ...prevProposal };
      newProposal.proposalCost = proposalCostRef.current.value;
      return newProposal;
    });
  }
  return (
    <div>
      <LabelElement className={`text-white`} htmlFor="proposalCost">
        Proposal cost
      </LabelElement>
      <InputInfoSpan className="text-yellow-300">
        Set a fixed price for the freelancing service that you are offering.
      </InputInfoSpan>
      <InputText
        name="proposalCost"
        id="proposalCost"
        type="number"
        className="w-full"
        inputRef={proposalCostRef}
        onChangeHandler={handleCostchange}
      />
    </div>
  );
}
