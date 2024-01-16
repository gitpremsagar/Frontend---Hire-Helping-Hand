import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function BottomLevelCategoryLi({
  bottomLevelCategory,
  topLevelCategory,
}) {
  const isUserFreelancer = useSelector(
    (state) => state.authSlice.isUserFreelancer
  );

  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (router.query.serviceName) {
      router.query.serviceName == bottomLevelCategory.name
        ? setIsActive(true)
        : setIsActive(false);
    }
  }, [router]);
  const activeClass = isActive ? `bg-gray-700` : ``;

  //   console.log(router.query.serviceName);

  return (
    <li className="my-1">
      <Link
        href={
          isUserFreelancer
            ? `/services/${topLevelCategory.name}/${bottomLevelCategory.name}?useHireHelpingHandAs=freelancer`
            : `/services/${topLevelCategory.name}/${bottomLevelCategory.name}`
        }
      >
        <a
          className={`block px-3 py-3 hover:bg-gray-600 text-xs mx-1 rounded  ${activeClass}`}
        >
          {bottomLevelCategory.name}
        </a>
      </Link>
    </li>
  );
}
