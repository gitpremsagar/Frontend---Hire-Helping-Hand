import React from "react";
import ButtonPrimaryOutlined from "../UI/ButtonPrimaryOutlined";
import EditIcon from "@mui/icons-material/Edit";
import ButtonDanger from "../UI/ButtonDanger";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightedText from "../UI/HighlightedText";
import SaveIcon from "@mui/icons-material/Save";
import InputText from "../UI/InputText";

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
  return (
    <tr
      className={
        colourChanger
          ? `border-b bg-neutral-100 hover:bg-gray-800 hover:text-white`
          : `border-b bg-white hover:bg-gray-800 hover:text-white`
      }
    >
      <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
      {editMode ? (
        <td className=" px-6 py-4">
          <div className="flex items-center text-black">
            <div className="text-xl mr-2 min-w-fit">I will</div>

            <InputText
              name="additionalService_1"
              placeholder={`do something extra`}
              className={`w-full`}
              // inputRef={extraServiceInputRef}
            />
            <div className="text-xl mx-2 min-w-fit">for</div>

            <InputText
              name="additionalService_1_price"
              placeholder={`money`}
              // inputRef={extraServiceChargeInputRef}
            />

            <div className="text-xl mx-2 min-w-fit">more and additional</div>

            <InputText
              name="additionalService_1_duration"
              placeholder={`days`}
              // inputRef={extraServiceDurationInputRef}
            />

            <div className="text-xl mx-2 min-w-fit">days</div>
          </div>
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

      <td className="whitespace-nowrap px-6 py-4 min-w-fit flex">
        {editMode ? (
          <ButtonPrimaryOutlined
            className={`flex items-center mr-2`}
            onClickHandler={saveClickHandler}
            additionalServiceIndex={index}
          >
            <SaveIcon className="mr-2" />
            Save
          </ButtonPrimaryOutlined>
        ) : (
          <ButtonPrimaryOutlined
            className={`flex items-center mr-2`}
            onClickHandler={editClickHandler}
            additionalServiceIndex={index}
          >
            <EditIcon className="mr-2" />
            Edit
          </ButtonPrimaryOutlined>
        )}

        <ButtonDanger
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
