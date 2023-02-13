export default function ProposalRating({ rating }) {
  return (
    <div>
      <span className="text-yellow-600 mx-2 text-2xl">* * * * *</span>
      <span>{rating}</span>
    </div>
  );
}
