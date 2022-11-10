export default function InputField({
  name,
  label,
  type,
  placeholder,
  handleChange,
  lableClass,
  inputClass,
}) {
  return (
    <>
      <label
        htmlFor={`${label}id`}
        className={`block font-bold text-lg mb-2 ${lableClass}`}
      >
        {label}
        {" :"}
      </label>
      <input
        id={`${label}id`}
        className={`block w-full p-2 rounded mb-5 border-2 text-gray-800 border-blue-400 ${inputClass}`}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
}
