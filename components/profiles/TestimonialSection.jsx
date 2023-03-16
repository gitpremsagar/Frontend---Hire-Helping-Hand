import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex items-center mb-4">
      <img
        className="w-12 h-12 rounded-full mr-4"
        src="https://via.placeholder.com/150"
        alt="User Avatar"
      />
      <div className="flex-1">
        <div className="text-lg font-medium text-gray-900">{review.author}</div>
        <div className="mt-1">
          <span className="text-yellow-500 text-sm">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </span>
        </div>
        <p className="mt-2 text-gray-600 text-sm">{review.text}</p>
      </div>
    </div>
  );
};

const TestimonialSection = (
  {
    /*reviews*/
  }
) => {
  const reviews = [
    {
      id: 1,
      author: "John Doe",
      text: "Great experience working with this freelancer. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      author: "Jane Smith",
      text: "The freelancer delivered the project on time and with great quality.",
      rating: 4,
    },
    {
      id: 3,
      author: "Bob Johnson",
      text: "The freelancer was very responsive and easy to work with.",
      rating: 4.5,
    },
    {
      id: 4,
      author: "Alice Brown",
      text: "I was very impressed with the freelancer's attention to detail. This is a little bigger review",
      rating: 5,
    },
  ];

  return (
    <section className="px-6 py-12 bg-gray-100">
      <h2 className="text-3xl font-medium text-center text-gray-900 mb-6">
        Our Customers Love Us
      </h2>
      <div className="flex flex-col items-start">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
