import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState([{ value: "" }]);

  const handleAddInput = () => {
    setInputs([...inputs, { value: "" }]);
  };

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };

  return (
    <form>
      {inputs.map((input, index) => (
        <div className="flex mb-2" key={index}>
          <input
            className="w-full border border-gray-400 p-2"
            type="text"
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
          />
        </div>
      ))}
      <button
        className="bg-blue-500 text-white p-2"
        type="button"
        onClick={handleAddInput}
      >
        Add More
      </button>
    </form>
  );
};

export default Form;
