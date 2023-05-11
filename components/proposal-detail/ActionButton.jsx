export default function ActionButton({ content }) {
  return (
    <button className="text-xs md:text-base mr-1 md:mr-2 py-2 px-4 min-w-fit bg-white rounded-full border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white transition-colors ease-linear">
      {content}
    </button>
  );
}
