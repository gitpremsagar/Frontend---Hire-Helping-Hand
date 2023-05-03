import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function BottomLevelCategoryLi({
  bottomLevelCategory,
  topLevelCategory,
}) {
  const isUserFreelancer = useSelector(
    (state) => state.authSlice.isUserFreelancer
  );

  return (
    <li>
      <Link
        href={
          isUserFreelancer
            ? `/services/${topLevelCategory.name}/${bottomLevelCategory.name}?useHireHelpingHandAs=freelancer`
            : `/services/${topLevelCategory.name}/${bottomLevelCategory.name}`
        }
      >
        <a className="block p-2 hover:bg-blue-500 rounded">
          {bottomLevelCategory.name}
        </a>
      </Link>
    </li>
  );
}
