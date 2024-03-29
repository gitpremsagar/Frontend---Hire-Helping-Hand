import React from "react";
import Link from "next/link";

export default function ProfileLink__ProposalPreview({ freelancer_id }) {
  return (
    <div className="flex mb-2">
      <Link href={`/user-profile/${freelancer_id}`}>
        <a>
          <div className="rounded-full w-10 h-10 bg-pink-300 text-center">
            {/* FIXME: provide src of actual profile image */}
            <img src={`/dummy-profile-pictures/male.png`} />
          </div>
        </a>
      </Link>
      <Link href={`/user-profile/${freelancer_id}`}>
        <a>
          <div className="">
            <h6 className="font-bold text-xs ml-2">
              {/* FIXME: provide actual name of the freelancer */}
              Freelancer : Freelancer Name
            </h6>
            <span className="text-xs ml-2">57 points</span>
          </div>{" "}
        </a>
      </Link>
    </div>
  );
}
