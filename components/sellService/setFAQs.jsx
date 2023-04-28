import React, { useEffect, useRef, useState } from "react";
import FAQ from "./FAQ";
import InputText from "../UI/InputText";
import ButtonPrimary from "../UI/ButtonPrimary";

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
      {faqs &&
        faqs.map((faq, index) => {
          return (
            <FAQ faq={faq} key={index} index={index} deleteFaq={deleteFaq} />
          );
        })}

      {/* form to add more faqs */}
      <div className="">
        <InputText
          name="faqQuestion"
          placeholder="Enter FAQ"
          inputRef={faqQuestionInputRef}
        />
        <InputText
          name="faqAnswer"
          placeholder="Enter Answer"
          inputRef={faqAnswerInputRef}
        />
        <ButtonPrimary onClickHandler={handleAddFaq}>Add FAQ</ButtonPrimary>
      </div>
    </div>
  );
}
