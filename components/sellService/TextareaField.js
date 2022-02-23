export default function TextareaField({
  name,
  label,
  type,
  placeholder,
  handleChange,
  labelClass,
  textareaClass,
}) {
  return (
    <>
      <label
        htmlFor={`${label}id`}
        className={`block text-gray-800 mb-2 ${labelClass}`}
      >
        {label}{" "}
      </label>
      <textarea
        id={`${label}id`}
        className={`block w-full p-2 rounded mb-5 ${textareaClass}`}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
}
