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

        {/* No. of revisions */}
        <InputField
          type="number"
          label="No. revisions"
          name="cost"
          placeholder="enter no. of revisions"
        />

        {/* No. of revisions */}
        <InputField
          type="number"
          label="No. revisions"
          name="cost"
          placeholder="enter no. of revisions"
        />

        {/* No. of revisions */}
        <InputField
          type="number"
          label="No. revisions"
          name="cost"
          placeholder="enter no. of revisions"
        />

        {/* No. of revisions */}
        <InputField
          type="number"
          label="No. revisions"
          name="cost"
          placeholder="enter no. of revisions"
        />

        <button className="rounded-full py-2 px-5 text-sm float-right bg-blue-500">
          Add More Options
        </button>
      </form>
    </div>
  );
}
