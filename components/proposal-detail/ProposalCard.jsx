import CallToActionButtons from "./CallToActionButtons";
import FreelancerProfileLink from "./FreelancerProfileLink";
import ProposalRating from "./ProposalRating";
import ProposalShortDescription from "./ProposalShortDescription";
import ProposalThumbnail from "./ProposalThumbnail";
import ProposalTitle from "./ProposalTitle";
import ServiceCost from "./ServiceCost";
import ServiceDeliveryDate from "./ServiceDeliveryDate";

export default function ProposalCard(props) {
  //the following names corespond to coloumn name in `proposal` table in database
  const {
    proposal_id,
    title,
    freelancer_id,
    price_basic,
    average_rating,
    delivery_duration,
    description,
    mode,
  } = props;

  // proposal title
  const proposal_title = title;
  // proposal_ID
  const proposal_ID = proposal_id;

  //  freelancer_ID
  const freelancer_ID = freelancer_id;

  // cost
  const cost = price_basic;

  //  rating
  const rating = average_rating;

  // required number of days to deliver the freelancing service
  const num_of_days = delivery_duration;

  //  description
  // const shortDescription =
  //   "I am writing to express my interest in the freelance web developer role you have advertised. With 2 years of experience in the field, I am confident in my ability to deliver high-quality, innovative, and effective web development solutions that meet your needs and exceed your expectations.";

  const shortDescription = description;
  return (
    <div className="w-full mb-10 overflow-hidden border-2 border-gray-200 hover:shadow-[0_4px_10px_5px_rgba(0,0,0,0.3)] rounded box-border transition-all ease-linear">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* thumbnail image */}
        <div className="col-span-2 overflow-hidden">
          <ProposalThumbnail />
        </div>

        {/* Service offer details */}
        <div className="col-span-3 flex flex-col justify-evenly p-5">
          <ProposalTitle
            proposal_ID={proposal_ID}
            proposal_title={proposal_title}
          />
          <ProposalRating rating={rating} />
          <ServiceCost cost={cost} />
          <FreelancerProfileLink freelancer_ID={freelancer_ID} />
          <ProposalShortDescription shortDescription={shortDescription} />
          <ServiceDeliveryDate num_of_days={num_of_days} />
          <CallToActionButtons
            freelancer_ID={freelancer_ID}
            proposal_ID={proposal_ID}
          />
          <span>{mode}</span>
        </div>
      </div>
    </div>
  );
}
