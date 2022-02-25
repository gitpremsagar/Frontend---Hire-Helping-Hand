export default function InputField({
  name,
  label,
  type,
  placeholder,
  handleChange,
}) {
  return (
    <>
      <label
        htmlFor={`${label}id`}
        className="block font-bold text-lg mb-2 text-white"
      >
        {label}
        {" :"}
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
