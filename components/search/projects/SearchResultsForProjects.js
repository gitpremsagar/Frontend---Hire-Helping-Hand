import ProposalCard from "../../proposal-detail/ProposalCard";

function SearchResultsForProjects({ projects }) {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold m-20 ml-0">
        Search Result: <span className="text-blue-600">Project's List</span>
      </h1>
      {projects.map((project, key) => {
        return <ProposalCard {...project} key={key} />;
      })}
    </main>
  );
}

export default SearchResultsForProjects;
