import React from "react";
import Section from "../../UI/Section";
import H6 from "./../../UI/H6";
import H3 from "../../UI/H3";

export default function BrowseCategoriesSection() {
  // TODO: show the list of project's and proposal's categories after fetching from server
  return (
    <Section>
      <H3>Browse Categories</H3>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-blue-200 p-6 rounded">
          <H6>Jobs (Projects)</H6>
          Here will be the list of project's categories
        </div>
        <div className="bg-green-200 p-6 rounded">
          <H6>Services (Proposals)</H6>
          Here will be the list of proposal's cetogries
        </div>
      </div>
    </Section>
  );
}
