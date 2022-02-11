import SearchForm from "./searchForm";

export default function HeroSection() {
  return (
    <section className="p-20">
      <h3 className="text-8xl text-gray-800 font-bold mb-20 my-auto text-center">
        Hire freelancer <br /> Get the job done
      </h3>
      <SearchForm />
    </section>
  );
}
