import Link from "next/link";
import ActionButton from "./ActionButton";

const CallToActionButtons = ({ freelancer_ID, proposal_ID }) => {
  return (
    <div className="flex mt-6">
      <ActionButton>Favourite</ActionButton>
      <Link href={`/user-messages/${freelancer_ID}`}>
        <a>
          <ActionButton>Contact</ActionButton>
        </a>
      </Link>

      <Link href={`/proposal-detail/${proposal_ID}`}>
        <a>
          <ActionButton>View Detail</ActionButton>
        </a>
      </Link>
    </div>
  );
};

export default CallToActionButtons;
