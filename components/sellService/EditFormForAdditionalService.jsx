import React, { useRef } from "react";
import InputText from "../UI/InputText";

export default function EditFormForAdditionalService({
  serviceDescription,
  serviceCost,
  serviceDuration,
  extraServiceInputRef,
  extraServiceChargeInputRef,
  extraServiceDurationInputRef,
}) {
  return (
    <div className="flex items-center">
      <div className="text-xl mr-2 min-w-fit">I will</div>

      <InputText
        name="additionalService_1"
        placeholder={`do something extra`}
        className={`w-full`}
        value={serviceDescription}
        inputRef={extraServiceInputRef}
      />
      <div className="text-xl mx-2 min-w-fit">for</div>

      <InputText
        name="additionalService_1_price"
        placeholder={`money`}
        value={serviceCost}
        inputRef={extraServiceChargeInputRef}
      />

      <div className="text-xl mx-2 min-w-fit">more and additional</div>

      <InputText
        name="additionalService_1_duration"
        placeholder={`days`}
        value={serviceDuration}
        inputRef={extraServiceDurationInputRef}
      />

      <div className="text-xl mx-2 min-w-fit">days</div>
    </div>
  );
}
