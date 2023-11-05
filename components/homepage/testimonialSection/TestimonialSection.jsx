import React from "react";
import Section from "../../UI/Section";
import H3 from "../../UI/H3";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  return (
    <Section>
      <H3>Client and Freelancer Testimonials</H3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TestimonialCard
          name="John Doe"
          position="Web Developer"
          testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in scelerisque libero."
          imageSrc="https://picsum.photos/200/300"
        />
        <TestimonialCard
          name="Jane Smith"
          position="Graphic Designer"
          testimonial="Vestibulum suscipit justo id bibendum facilisis. Nullam eu lacinia metus."
          imageSrc="https://picsum.photos/200/300"
        />
        <TestimonialCard
          name="David Johnson"
          position="Content Writer"
          testimonial="Fusce nec euismod orci. Suspendisse bibendum, nisl eget consectetur venenatis."
          imageSrc="https://picsum.photos/200/300"
        />

        {/* Add more testimonials as needed */}
      </div>
    </Section>
  );
}
