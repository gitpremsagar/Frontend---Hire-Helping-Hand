import React from "react";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

export default function CustomCheckbox({ name }) {
  const [isChecked, setIsChecked] = useState(false);
  const labelForCheckbox = { inputProps: { "aria-label": "Checkbox" } };
  return (
    <>
      <Checkbox
        name={name}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        {...labelForCheckbox}
      />
      {isChecked ? (
        <span className="text-green-600">Included</span>
      ) : (
        <span className="text-red-600">Not Included!</span>
      )}
    </>
  );
}
