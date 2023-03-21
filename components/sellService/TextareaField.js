export default function TextareaField({
  name,
  label,
  type,
  placeholder,
  onChangeHandler,
  labelClass,
  textareaClass,
}) {
  return (
    <>
      <label
        htmlFor={`${label}id`}
        className={`block mb-2 font-bold text-lg ${labelClass}`}
      >
        {label}
        {" :"}
      </label>
      <textarea
        id={`${label}id`}
        className={`block w-full p-2 rounded mb-5 text-gray-800 max-h-[300px] min-h-[300px] border-2 border-blue-400 overflow-y-scroll ${textareaClass}`}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </>
  );
}
