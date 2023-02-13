export default function ActionButton({ content }) {
  return (
    <button className="mx-2 bg-white rounded-full border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white py-2 px-4 transition-colors ease-linear">
      {content}
    </button>
  );
}
