export default function Input({
  name,
  label,
  type,
  placeholder,
  handleChange,
}) {
  return (
    <>
      <label htmlFor={`${label}id`} className="block mb-2 font-semibold">
        {label}{" "}
      </label>
      <input
        id={`${label}id`}
        className="block w-full p-2 mb-5 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-500"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
}
