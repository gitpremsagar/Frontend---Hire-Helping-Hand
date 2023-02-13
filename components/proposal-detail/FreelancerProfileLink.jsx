import Link from "next/link";

export default function FreelancerProfileLink({ freelancer_ID }) {
  return (
    <div className="flex mb-2">
      <Link href={`/user-profile/${freelancer_ID}`}>
        <a>
          <div className="rounded-full w-10 h-10 bg-pink-300 text-center">
            PS
          </div>
        </a>
      </Link>
      <Link href={`/user-profile/${freelancer_ID}`}>
        <a>
          <div className="">
            <h6 className="font-bold text-xs ml-2">Freelancer : Idiot</h6>
            <span className="text-xs ml-2">57 points</span>
          </div>{" "}
        </a>
      </Link>
    </div>
  );
}
