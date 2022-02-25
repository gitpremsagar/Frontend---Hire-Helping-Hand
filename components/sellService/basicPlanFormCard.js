import InputField from "./InputField";
import TextareaField from "./TextareaField";

export default function BasicPlanFormCard({ handleChange }) {
  return (
    <div className="bg-green-400 serviceOfferCol">
      <h2>Basic</h2>
      <form method="POST">
        {/* service title */}
        <InputField
          type="text"
          label="Service Title"
          name="serviceTitle"
          placeholder="I will do <the service you provide>"
        />
        {/* service title */}
        <InputField
          type="number"
          label="Cost"
          name="cost"
          placeholder="Enter amount"
        />
        {/* service description */}
        <TextareaField
          name="basicOfferDetail"
          label="Freelancing service description"
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
