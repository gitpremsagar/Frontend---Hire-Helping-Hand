export default function ServiceCost({ cost }) {
  return (
    <p className="mb-2 font-bold">
      $ <span className="text-3xl">{cost}</span>
    </p>
  );
}
