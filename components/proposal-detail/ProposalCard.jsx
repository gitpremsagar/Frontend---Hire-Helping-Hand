import CallToActionButtons from "./CallToActionButtons";
import FreelancerProfileLink from "./FreelancerProfileLink";
import ProposalRating from "./ProposalRating";
import ProposalShortDescription from "./ProposalShortDescription";
import ProposalThumbnail from "./ProposalThumbnail";
import ProposalTitle from "./ProposalTitle";
import ServiceCost from "./ServiceCost";
import ServiceDeliveryDate from "./ServiceDeliveryDate";

export default function ProposalCard() {
  //dummy proposal_ID
  const proposal_ID = 32;

  // dummy freelancer_ID
  const freelancer_ID = 467;

  //dummy cost
  const cost = 199;

  // dummy rating
  const rating = 3.5;

  //dummy required number of days to deliver the freelancing service
  const num_of_days = 6;

  // dummy description
  const shortDescription =
    "I am writing to express my interest in the freelance web developer role you have advertised. With 2 years of experience in the field, I am confident in my ability to deliver high-quality, innovative, and effective web development solutions that meet your needs and exceed your expectations.";

  return (
    <div className="w-full mb-10 overflow-hidden border-2 border-gray-200 hover:shadow-[0_4px_10px_5px_rgba(0,0,0,0.3)] rounded box-border transition-all ease-linear">
      <div className="grid grid-cols-5">
        {/* thumbnail image */}
        <div className="col-span-2 h-[400px] overflow-hidden">
          <ProposalThumbnail />
        </div>

        {/* Service offer details */}
        <div className="col-span-3 ml-4 mt-4 mr-4">
          <ProposalTitle proposal_ID={proposal_ID} />
          <ProposalRating rating={rating} />
          <ServiceCost cost={cost} />
          <FreelancerProfileLink freelancer_ID={freelancer_ID} />
          <ProposalShortDescription shortDescription={shortDescription} />
          <ServiceDeliveryDate num_of_days={num_of_days} />
          <CallToActionButtons />
        </div>
      </div>
    </div>
  );
}
