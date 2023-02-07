import Form from "../post-job/Form";
import InputField from "./InputField";
import TextareaField from "./TextareaField";

export default function BasicPlanFormCard({ handleChange }) {
  return (
    <div className="serviceOfferCol">
      <h2 className="text-blue-400">Basic</h2>
      <Form />
    </div>
  );
}
