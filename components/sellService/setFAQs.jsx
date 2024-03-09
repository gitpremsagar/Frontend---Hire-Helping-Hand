import React, { useEffect, useRef, useState } from "react";
import FAQ from "./FAQ";
import InputText from "../UI/InputText";
import ButtonPrimary from "../UI/ButtonPrimary";
import H5 from "../UI/H5";
import Section from "../UI/Section";

export default function SetFaqs({ proposal, setProposal }) {
  //   refferences for input fields
  const faqQuestionInputRef = useRef();
  const faqAnswerInputRef = useRef();

  function handleAddFaq(e) {
    e.preventDefault();
    const newFaq = {
      question: faqQuestionInputRef.current.value,
      answer: faqAnswerInputRef.current.value,
    };

    // update the proposal.faqs[] array
    setProposal({
      ...proposal,
      faqs: [...proposal.faqs, newFaq],
    });

    faqQuestionInputRef.current.value = "";
    faqAnswerInputRef.current.value = "";
  }

  function deleteFaq(index) {
    const newFaqs = proposal.faqs.filter((faq, i) => i !== index);
    setProposal({
      ...proposal,
      faqs: newFaqs,
    });
  }

  return (
    <Section className="text-white">
      {/* form to add more faqs */}
      <div className="flex flex-col md:gap-2 justify-center">
        <H5 className={`mb-10`}>Add Frequently Asked Questions:</H5>
        {/* map FAQs */}
        {proposal.faqs &&
          proposal.faqs.map((faq, index) => {
            return (
              <FAQ faq={faq} key={index} index={index} deleteFaq={deleteFaq} />
            );
          })}

        {/* faq form to add new faqs */}
        <div className="flex items-center gap-2 mt-5">
          <label className="min-w-fit" htmlFor="faqQuestion">
            Question :{" "}
          </label>
          <InputText
            name="faqQuestion"
            placeholder="Enter FAQ"
            inputRef={faqQuestionInputRef}
            id="faqQuestion"
            className="w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="min-w-fit" htmlFor="faqAnswer">
            Answer :{" "}
          </label>
          <InputText
            name="faqAnswer"
            placeholder="Enter Answer"
            inputRef={faqAnswerInputRef}
            id="faqAnswer"
            className="w-full"
          />
        </div>

        <ButtonPrimary onClickHandler={handleAddFaq}>Add FAQ</ButtonPrimary>
      </div>
    </Section>
  );
}
