import ServiceCardVertical from "../cards/ServiceCardVertical";

export default function SimilarServicesSection() {
  return (
    <section className="p-4">
      <h3 className="text-2xl font-bold">Other Similar Services</h3>
      <div className="flex flex-1 justify-evenly p-4">
        <ServiceCardVertical />
        <ServiceCardVertical />
        <ServiceCardVertical />
      </div>
    </section>
  );
}
