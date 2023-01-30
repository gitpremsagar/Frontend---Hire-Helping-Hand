export default function ServiceCardVertical() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img
        className="w-full"
        src="https://via.placeholder.com/300x200"
        alt="Card image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          Card description goes here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Action
        </button>
      </div>
    </div>
  );
}
