import Link from "next/link";

export default function ProposalTitle({ proposal_ID }) {
  return (
    <Link href={`/proposal-detail/${proposal_ID}`}>
      <a>
        <h3 className="text-xl font-semibold mb-2 cursor-pointer text-blue-600 hover:text-blue-500">
          Expert Web Development: Create a Stunning Website with Tailored
          Features
        </h3>
      </a>
    </Link>
  );
}
