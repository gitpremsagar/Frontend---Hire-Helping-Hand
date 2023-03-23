import ProposalCard from "../../proposal-detail/ProposalCard";

function SearchResultsForProposals({ proposals }) {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold m-20 ml-0">
        Search Result: <span className="text-blue-600">Proposal's List</span>
      </h1>
      {proposals.map((proposal, key) => {
        return <ProposalCard {...proposal} key={key} />;
      })}
    </main>
  );
}

export default SearchResultsForProposals;
