function SearchResultsForProposals({ proposals }) {
  return (
    <div>
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
    </div>
  );
}

export default SearchResultsForProposals;
