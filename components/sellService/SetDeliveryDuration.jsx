import React, { useRef } from "react";
import LabelElement from "../UI/LabelElement";
import InputInfoSpan from "../UI/InputInfoSpan";
import InputText from "../UI/InputText";

export default function SetDeliveryDuration({ proposal, setProposal }) {
  const proposalDeliveryDurationRef = useRef();

  function handleDeliveryDurationChange() {
    setProposal((prevProposal) => {
      const newProposal = { ...prevProposal };
      newProposal.proposalDeliveryDuration =
        proposalDeliveryDurationRef.current.value;
      return newProposal;
    });
  }
  return (
    <div>
      <LabelElement className={`text-white`} htmlFor="proposalDeliveryDuration">
        Delivery Duration( in Days )
      </LabelElement>
      <InputInfoSpan>
        Set the number of days it's going to take for you to deliver the service
        that you are offering.
      </InputInfoSpan>

      <InputText
        name="proposalDeliveryDuration"
        id="proposalDeliveryDuration"
        type="number"
        className="w-full"
        inputRef={proposalDeliveryDurationRef}
        onChangeHandler={handleDeliveryDurationChange}
      />
    </div>
  );
}
