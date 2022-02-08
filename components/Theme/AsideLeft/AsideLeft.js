export default function AsideLeft() {
  return (
    <aside className="h-screen bg-gray-800 text-white w-[200px]">
      <ul>
        {["item 1", "item 2", "item 3"].map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </aside>
  );
}
