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

  return <div></div>;
}
