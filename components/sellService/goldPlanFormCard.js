import InputField from "./InputField";
import TextareaField from "./TextareaField";

export default function GoldPlanFormCard({ handleChange }) {
  return (
    <div className="serviceOfferCol">
      <h2 className="text-yellow-400">Gold</h2>
      <form method="POST">
        {/* Cost */}
        <InputField
          type="number"
          label="Cost"
          name="cost"
          placeholder="Enter amount"
        />
        {/* service description */}
        <TextareaField
          name="basicOfferDetail"
          label="Short description of Gold Package"
          type="text"
          placeholder="Write detail of service offered by you..."
          labelClass="text-white"
          textareaClass=""
          handleChange={handleChange}
        />
      </form>
    </div>
  );
}
