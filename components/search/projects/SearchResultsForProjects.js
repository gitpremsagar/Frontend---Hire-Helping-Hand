function SearchResultsForProjects({ projects }) {
  return (
    <div>
      <h1>Projects List</h1>
      <ul>
        {projects.map((project, key) => (
          <li key={key}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Category: {project.category}</p>
            <p>Subcategory: {project.sub_category}</p>
            <p>Delivery Timeframe: {project.delivery_timeframe} days</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsForProjects;
