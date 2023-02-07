import HorizontalFreelancerCard from "../cards/HorizontalFreelancerCard";

export default function SimilarFreelancers() {
  return (
    <section className="p-4">
      <h3 className="font-bold text-2xl">Other Freelncers in this category</h3>
      <div className="flex flex-1 justify-evenly p-4">
        <HorizontalFreelancerCard />
        <HorizontalFreelancerCard />
        <HorizontalFreelancerCard />
      </div>
    </section>
  );
}
