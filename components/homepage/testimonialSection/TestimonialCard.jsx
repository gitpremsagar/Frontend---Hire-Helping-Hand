// import React from "react";

// export default function TestimonialCard({ children, className }) {
//   return (
//     <div
//       className={`px-2 py-10  w-full border bottom-1 rounded-lg text-center cursor-default font-bold ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

import React from "react";
import UserThumbnail from "./TestimonialUserThumbnail";

const TestimonialCard = ({ name, position, testimonial, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center">
        <div className="mr-4">
          {/* User Thumbnail */}
          <UserThumbnail src={imageSrc} alt={name} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">{position}</p>
        </div>
      </div>
      <p className="text-gray-800 mt-4">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
