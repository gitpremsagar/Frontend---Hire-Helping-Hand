import SearchForm from "./searchForm";

export default function HeroSection() {
  return (
    <section className="p-20">
      <div className="mb-20 my-auto text-center">
        <h1 className="text-6xl text-gray-800 font-bold mb-6">
          Hire Helping Hand
        </h1>
        <h2 className="text-2xl">
          Community of freelancers and clients in one platform
        </h2>
      </div>
      <SearchForm />
    </section>
  );
}
