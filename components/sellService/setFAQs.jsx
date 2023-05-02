import React, { useEffect, useRef, useState } from "react";
import FAQ from "./FAQ";
import InputText from "../UI/InputText";
import ButtonPrimary from "../UI/ButtonPrimary";
import H5 from "../UI/H5";

export default function SetFaqs({ proposal, setProposal }) {
  const [faqs, setFaqs] = useState([]);

  //   update the proposal
  useEffect(() => {
    setProposal((prev) => {
      const updatedProposal = { ...prev };
      updatedProposal.faqs = faqs;
      return updatedProposal;
    });
  }, [faqs]);

  //   refferences for input fields
  const faqQuestionInputRef = useRef();
  const faqAnswerInputRef = useRef();

  function handleAddFaq(e) {
    e.preventDefault();
    const newFaq = {
      question: faqQuestionInputRef.current.value,
      answer: faqAnswerInputRef.current.value,
    };
    setFaqs([...faqs, newFaq]);
    faqQuestionInputRef.current.value = "";
    faqAnswerInputRef.current.value = "";
  }

  function deleteFaq(index) {
    setFaqs(faqs.filter((faq, i) => i !== index));
  }

  return (
    <div className="text-white">
      {/* map FAQs */}
      {faqs &&
        faqs.map((faq, index) => {
          return (
            <FAQ faq={faq} key={index} index={index} deleteFaq={deleteFaq} />
          );
        })}

      {/* form to add more faqs */}
      <div className="flex flex-col md:gap-2 justify-center">
        <H5>Add Frequently Asked Questions:</H5>
        <div className="flex items-center gap-2">
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
    </div>
  );
}
