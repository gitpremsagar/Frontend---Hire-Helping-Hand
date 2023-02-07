export default function HorizontalFreelancerCard() {
  return (
    <div className="flex items-center max-w-sm overflow-hidden bg-white rounded shadow-lg">
      <img
        className="w-64 h-64 object-cover"
        src="https://via.placeholder.com/200x300"
        alt="Card image"
      />
      <div className="p-6">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          Card description goes here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </div>
    </div>
  );
}
