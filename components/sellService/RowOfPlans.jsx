import React from "react";
import CellOfBasicPlan from "./CellOfBasicPlan";
import CellOfGoldPlan from "./CellOfGoldPlan";
import CellOfSideHeadingForAllPlans from "./CellOfSideHeadingForAllPlans";
import CellOfSilverPlan from "./CellOfSilverPlan";

export default function RowOfPlans() {
  return (
    <div className="grid lg:grid-cols-4 ">
      <CellOfSideHeadingForAllPlans>
        <h3 className="font-semibold">Describe Each Plan</h3>
      </CellOfSideHeadingForAllPlans>

      <CellOfBasicPlan>
        <h3 className="font-semibold">Basic</h3>
      </CellOfBasicPlan>

      <CellOfSilverPlan>
        <h3 className="font-semibold">Silver</h3>
      </CellOfSilverPlan>

      <CellOfGoldPlan>
        <h3 className="font-semibold">Gold</h3>
      </CellOfGoldPlan>
    </div>
  );
}
