import React from "react";

export default function OptionElement({ value, children }) {
  return <option value={value}>{children}</option>;
}
