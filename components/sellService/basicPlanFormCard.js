import InputField from "./InputField";
import TextareaField from "./TextareaField";

export default function BasicPlanFormCard({ handleChange }) {
  return (
    <div className="serviceOfferCol">
      <h2 className="text-blue-400">Basic</h2>
      <form method="POST">
        {/* cost */}
        <InputField
          type="number"
          label="Cost"
          name="cost"
          placeholder="Enter amount"
        />
        {/* service description */}
        <TextareaField
          name="basicOfferDetail"
          label="Short description of Basic Package"
          type="text"
          placeholder="enter basic plan description"
          labelClass="text-white"
          textareaClass="h-[200px]"
          handleChange={handleChange}
        />
      </form>
    </div>
  );
}
