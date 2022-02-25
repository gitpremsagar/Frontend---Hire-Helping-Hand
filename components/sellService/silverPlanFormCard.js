import InputField from "./InputField";
import TextareaField from "./TextareaField";

export default function SilverPlanFromCard({ handleChange }) {
  return (
    <div className="serviceOfferCol">
      <h2>Silver</h2>
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
          label="Short description of Silver Package"
          type="text"
          placeholder="Write detail of service offered by you..."
          labelClass="text-white"
          textareaClass="h-[200px]"
          handleChange={handleChange}
        />
      </form>
    </div>
  );
}
