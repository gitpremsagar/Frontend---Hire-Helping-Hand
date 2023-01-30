import ServiceCardVertical from "../cards/ServiceCardVertical";

export default function SimilarServicesSection() {
  return (
    <section className="flex flex-1 justify-evenly p-4">
      <ServiceCardVertical />
      <ServiceCardVertical />
      <ServiceCardVertical />
    </section>
  );
}
