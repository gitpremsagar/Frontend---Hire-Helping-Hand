import CategoryCard from "../cards/CategoryCard";

export default function CategoriesSection() {
  return (
    <section className="p-20">
      <h6 className="font-bold text-center text-2xl mb-20">
        Services Category
      </h6>
      <div className="grid grid-cols-4 gap-5">
        {[
          "Home",
          "Design & Graphics",
          "Web Devlopment",
          "App Development",
          "Writing",
          "Digital Marketing",
          "Video & Audio",
          "Business",
          "Trending",
        ].map((category, key) => {
          return <CategoryCard key={key} category={category} />;
        })}
      </div>
    </section>
  );
}
