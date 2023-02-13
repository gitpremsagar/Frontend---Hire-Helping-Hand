export default function SelectMenuOnlineStatus({ label }) {
  return (
    <div>
      <label htmlFor={label}>{label} : </label>
      <select
        name={label}
        id={label}
        className="text-black py-1 px-2 border-2 rounded"
      >
        <option>All</option>
        <option>Online Only</option>
      </select>
    </div>
  );
}
