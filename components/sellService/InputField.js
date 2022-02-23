export default function InputField({
  name,
  label,
  type,
  placeholder,
  handleChange,
}) {
  return (
    <>
      <label htmlFor={`${label}id`} className="block text-gray-800 mb-2">
        {label}{" "}
      </label>
      <input
        id={`${label}id`}
        className="block w-full p-2 rounded mb-5"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
}
