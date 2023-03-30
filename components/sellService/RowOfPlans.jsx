import React from "react";
import CellOfBasicPlan from "./CellOfBasicPlan";
import CellOfGoldPlan from "./CellOfGoldPlan";
import CellOfSideHeadingForAllPlans from "./CellOfSideHeadingForAllPlans";
import CellOfSilverPlan from "./CellOfSilverPlan";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputField from "./InputField";
import CustomCheckbox from "./CustomCheckbox";

const label = { inputProps: { "aria-label": "Checkbox" } };

export default function RowOfPlans({
  rowSideHeading,
  inputType,
  onChangeHandler,
}) {
  return (
    // ====== row =======
    <div className="grid lg:grid-cols-4 border-b-2 border-gray-800">
      {/* col -1 */}
      <CellOfSideHeadingForAllPlans>
        <h3 className="font-semibold">{rowSideHeading}</h3>
      </CellOfSideHeadingForAllPlans>

      {/* col -2 */}
      <CellOfBasicPlan>
        {inputType == "checkBox" ? (
          <CustomCheckbox name="basic" />
        ) : (
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue=""
            type={inputType}
            name="basic"
            onChange={onChangeHandler}
          />
        )}
      </CellOfBasicPlan>

      {/* col -3 */}
      <CellOfSilverPlan>
        {inputType == "checkBox" ? (
          <CustomCheckbox name="silver" />
        ) : (
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue=""
            type={inputType}
            name="silver"
            onChange={onChangeHandler}
          />
        )}
      </CellOfSilverPlan>

      {/* col -4 */}
      <CellOfGoldPlan>
        {inputType == "checkBox" ? (
          <CustomCheckbox name="gold" />
        ) : (
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue=""
            type={inputType}
            name="gold"
            onChange={onChangeHandler}
          />
        )}
      </CellOfGoldPlan>
    </div>
  );
}
