export default function Input({
  name,
  label,
  type,
  placeholder,
  handleChange,
}) {
  return (
    <>
      <label htmlFor={`${label}id`} className="block mb-2">
        {label}{" "}
      </label>
      <input
        id={`${label}id`}
        className="block w-full p-2 rounded mb-5 text-black"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
}
