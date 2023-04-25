import React, { useRef } from "react";
import ButtonPrimaryOutlined from "../UI/ButtonPrimaryOutlined";
import EditIcon from "@mui/icons-material/Edit";
import ButtonDanger from "../UI/ButtonDanger";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightedText from "../UI/HighlightedText";
import SaveIcon from "@mui/icons-material/Save";
import InputText from "../UI/InputText";
import EditFormForAdditionalService from "./EditFormForAdditionalService";

export default function AdditionalServiceRow({
  colourChanger,
  index,
  serviceDescription,
  serviceCost,
  serviceDuration,
  deleteClickHandler,
  editClickHandler,
  saveClickHandler,
  editMode,
}) {
  // give different colour to each row
  let classNameTableRow = colourChanger
    ? ` bg-neutral-100 hover:bg-gray-800 hover:text-white`
    : ` bg-white hover:bg-gray-800 hover:text-white`;

  // give red background to rowa that are in edit mode
  classNameTableRow = editMode
    ? `bg-red-300 hover:bg-gray-800 hover:text-white`
    : classNameTableRow;

  const extraServiceInputRef = useRef();
  const extraServiceChargeInputRef = useRef();
  const extraServiceDurationInputRef = useRef();

  function saveChangesOfAddtionService() {
    const newDataOfAdditionalServices = {
      serviceDescription: extraServiceInputRef.current.value,
      serviceCost: extraServiceChargeInputRef.current.value,
      serviceDuration: extraServiceDurationInputRef.current.value,
      editMode: false,
    };
    const additionalServiceID = index - 1;
    saveClickHandler(additionalServiceID, newDataOfAdditionalServices);
  }

  return (
    <tr className={classNameTableRow}>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
      {editMode ? (
        <td className=" px-6 py-4">
          <EditFormForAdditionalService
            serviceDescription={serviceDescription}
            serviceCost={serviceCost}
            serviceDuration={serviceDuration}
            extraServiceInputRef={extraServiceInputRef}
            extraServiceChargeInputRef={extraServiceChargeInputRef}
            extraServiceDurationInputRef={extraServiceDurationInputRef}
          />
        </td>
      ) : (
        <td className=" px-6 py-4">
          I will
          <HighlightedText> {`${serviceDescription} `}</HighlightedText>
          for<HighlightedText> {`${serviceCost}`} </HighlightedText>
          more and additional{" "}
          <HighlightedText>{serviceDuration} days</HighlightedText>.
        </td>
      )}

      <td className="whitespace-nowrap px-6 py-4 min-w-fit flex flex-col">
        {editMode ? (
          <ButtonPrimaryOutlined //save button
            className={`flex items-center mr-2 mb-2`}
            onClickHandler={saveChangesOfAddtionService}
            additionalServiceIndex={index}
          >
            <SaveIcon className="mr-2" />
            Save
          </ButtonPrimaryOutlined>
        ) : (
          <ButtonPrimaryOutlined //edit button
            className={`flex items-center mr-2 mb-2`}
            onClickHandler={editClickHandler}
            additionalServiceIndex={index}
          >
            <EditIcon className="mr-2" />
            Edit
          </ButtonPrimaryOutlined>
        )}

        <ButtonDanger //delete button
          className={`flex items-center`}
          onClickHandler={deleteClickHandler}
          additionalServiceIndex={index}
        >
          <DeleteIcon className="mr-2" />
          Delete
        </ButtonDanger>
      </td>
    </tr>
  );
}
