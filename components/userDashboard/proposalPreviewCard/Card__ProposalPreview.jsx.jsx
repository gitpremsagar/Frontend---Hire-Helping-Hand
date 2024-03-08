import Cost__ProposalPreview from "./Cost__ProposalPreview";
import Thumbnail__ProposalPreview from "./Thumbnail__ProposalPreview";
import Title__ProposalPreview from "./Title__ProposalPreview";
import ProfileLink__ProposalPreview from "./ProfileLink__ProposalPreview";
import Description__ProposalPreview from "./Description__ProposalPreview";
import Link from "next/link";

export default function Card__ProposalPreview(props) {
  //the following names corespond to coloumn name in `proposal` table in database
  const {
    proposal_id,
    title,
    freelancer_id,
    price_basic,
    average_rating,
    delivery_duration,
    description,
    thummbnail_links,
    mode,
  } = props;
  return (
    <div className="w-full mb-10 overflow-hidden border-2 border-gray-200 hover:shadow-[0_4px_10px_5px_rgba(0,0,0,0.3)] rounded box-border transition-all ease-linear">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* thumbnail image */}
        <div className="col-span-1 overflow-hidden">
          <Thumbnail__ProposalPreview thummbnail_links={thummbnail_links} />
        </div>

        {/* Service offer details */}
        <div className="col-span-4 flex flex-col justify-evenly p-5">
          <Title__ProposalPreview {...props} />
          <Cost__ProposalPreview cost={price_basic} />
          <ProfileLink__ProposalPreview freelancer_id={freelancer_id} />
          <Description__ProposalPreview description={description} />
          {/* show edit button if mode is `draft` */}
          {mode === "draft" && (
            <div className="flex justify-end gap-5">
              {/* preview button link to preview page*/}
              <Link
                href={`/proposal-detail/proposal-preview-of-draft/${proposal_id}`}
              >
                <button className="px-3 py-1 text-white bg-blue-500 rounded">
                  Preview
                </button>
              </Link>

              {/* edit button */}
              <button className="px-3 py-1 text-white bg-blue-500 rounded">
                Edit
              </button>
            </div>
          )}
          {/* <span>{mode}</span> */}
        </div>
      </div>
    </div>
  );
}
