import SearchForm from "./searchForm";
import H2 from "./../UI/H2";
import Section from "./../UI/Section";
import H3 from "./../UI/H3";

export default function HeroSection(props) {
  return (
    <Section>
      <div className="mb-20 my-auto text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-gray-800 font-bold mb-6">
          Hire Helping Hand
        </h1>
        <H3 className={`text-gray-800`}>
          Marketplace for freelancers and clients to connect and collaborate on
          projects.
        </H3>
      </div>
      <SearchForm {...props} />
    </Section>
  );
}
