import React from "react";
import CellOfBasicPlan from "./CellOfBasicPlan";
import CellOfGoldPlan from "./CellOfGoldPlan";
import CellOfSideHeadingForAllPlans from "./CellOfSideHeadingForAllPlans";
import CellOfSilverPlan from "./CellOfSilverPlan";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputField from "./InputField";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function RowOfPlans({ rowSideHeading, inputType }) {
  const InputElement = (inputName) => {
    return <input type="text" name={inputName} placeholder="write something" />;
  };
  return (
    <div className="grid lg:grid-cols-4 border-b-2 border-gray-800">
      <CellOfSideHeadingForAllPlans>
        <h3 className="font-semibold">{rowSideHeading}</h3>
      </CellOfSideHeadingForAllPlans>

      <CellOfBasicPlan>
        {inputType == "checkBox" ? (
          <Checkbox {...label} />
        ) : (
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue=""
          />
        )}
      </CellOfBasicPlan>

      <CellOfSilverPlan>
        {inputType == "checkBox" ? (
          <Checkbox {...label} />
        ) : (
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue=""
          />
        )}
      </CellOfSilverPlan>

      <CellOfGoldPlan>
        {inputType == "checkBox" ? (
          <Checkbox {...label} />
        ) : (
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue=""
          />
        )}
      </CellOfGoldPlan>
    </div>
  );
}
