import React from "react";
import ButtonPrimaryOutlined from "../UI/ButtonPrimaryOutlined";
import EditIcon from "@mui/icons-material/Edit";
import ButtonDanger from "../UI/ButtonDanger";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AdditionalServiceRow() {
  return (
    <tr className="border-b bg-neutral-100">
      <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
      <td className="whitespace-nowrap px-6 py-4">
        I will
        <span className="text-blue-600 font-semibold">
          {" "}
          make the whole world dance for you{" "}
        </span>
        if you pay me{" "}
        <span className="text-blue-600 font-semibold"> $1,000,000</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4 min-w-fit flex">
        <ButtonPrimaryOutlined className={`flex items-center mr-2`}>
          <EditIcon className="mr-2" />
          Edit
        </ButtonPrimaryOutlined>

        <ButtonDanger className={`flex items-center`}>
          <DeleteIcon className="mr-2" />
          Delete
        </ButtonDanger>
      </td>
    </tr>
  );
}
