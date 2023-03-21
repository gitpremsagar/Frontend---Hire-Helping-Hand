import ProposalCard from "../../proposal-detail/ProposalCard";

function SearchResultsForProposals({ proposals }) {
  return (
    <main className="p-10">
      <h1>Proposal List</h1>
      <ul>
        {proposals.map((proposal, key) => (
          <li key={key}>
            <h2>{proposal.title}</h2>
            <p>{proposal.description}</p>
            <p>Category: {proposal.category}</p>
            <p>Subcategory: {proposal.sub_category}</p>
            {/* ... */}
          </li>
        ))}
      </ul>
      <ProposalCard />
      <ProposalCard />
      <ProposalCard />
      <ProposalCard />
      <ProposalCard />
      <ProposalCard />
      <ProposalCard />
      <ProposalCard />
      <ProposalCard />
      <ProposalCard />
      <ProposalCard />
    </main>
  );
}

export default SearchResultsForProposals;
