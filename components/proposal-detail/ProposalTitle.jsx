import Link from "next/link";

export default function ProposalTitle({ proposal_ID, proposal_title }) {
  return (
    <Link href={`/proposal-detail/${proposal_ID}`}>
      <a>
        <h3 className="text-xl font-semibold cursor-pointer text-blue-600 hover:text-blue-500">
          {proposal_title}
        </h3>
      </a>
    </Link>
  );
}
