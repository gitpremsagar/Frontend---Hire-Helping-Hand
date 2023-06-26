import Link from "next/link";
import ActionButton from "./ActionButton";

const CallToActionButtons = ({ freelancer_ID }) => {
  return (
    <div className="flex mt-6">
      <ActionButton>Favourite</ActionButton>
      <ActionButton>
        <Link href={`/user-messages/${freelancer_ID}`}>Contact</Link>
      </ActionButton>
      <ActionButton>View Detail</ActionButton>
    </div>
  );
};

export default CallToActionButtons;
