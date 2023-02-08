import React from "react";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star text-gray-500"></i>);
    }
  }

  return (
    <div className="flex items-center text-sm text-gray-500">
      {stars}
      <span className="ml-2">({rating}/5)</span>
    </div>
  );
};

export default RatingStars;
