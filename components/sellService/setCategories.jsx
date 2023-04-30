import React, { useEffect, useRef, useState } from "react";
import LabelElement from "../UI/LabelElement";
import InputInfoSpan from "../UI/InputInfoSpan";
import FormElementContainer from "../UI/FormElementContainer";
import { useSelector } from "react-redux";
import SelectElement from "../UI/SelectElement";
import OptionElement from "../UI/OptionElement";

export default function SetCategories({ proposal, setProposal }) {
  //   const [topLevelCategory, setTopLevelCategory] = useState([]);
  //   const [midLevelCategory, setMidLevelCategory] = useState([]);
  //   const [bottomLevelCategory, setBottomLevelCategory] = useState([]);
  const topLevelCategoryRef = useRef();
  const midLevelCategoryRef = useRef();
  const bottomLevelCategoryRef = useRef();

  const topLevelCategories = useSelector((state) => state.topLevelCategories);
  const midLevelCategories = useSelector((state) => state.midLevelCategories);
  const bottomLevelCategories = useSelector(
    (state) => state.bottomLevelCategories
  );

  function handleTopLevelCategoryChange() {
    // setTopLevelCategory(topLevelCategoryRef.current.value);
  }

  function handleMidLevelCategoryChange() {}

  function handleBottomLevelCategoryChange() {}

  return (
    <div className="grid grid-cols-1 gap-2 lg:gap-5 md:grid-cols-3">
      <FormElementContainer>
        <LabelElement htmlFor="topLevelCategory">
          Top Level Category
        </LabelElement>

        <InputInfoSpan className="text-yellow-300">
          Define top level category of the freelancing service that you provide.
        </InputInfoSpan>

        <SelectElement
          elementName="topLevelCategory"
          id="topLevelCategory"
          className="w-full"
          selectRef={topLevelCategoryRef}
          onChangeHandler={handleTopLevelCategoryChange}
        >
          {topLevelCategories.map((topLevelCategory, key) => {
            return (
              <OptionElement value={topLevelCategory.name} key={key}>
                {topLevelCategory.name}
              </OptionElement>
            );
          })}
        </SelectElement>
      </FormElementContainer>

      <FormElementContainer>
        <LabelElement htmlFor="midLevelCategory">
          Mid Level Category
        </LabelElement>

        <InputInfoSpan className="text-yellow-300">
          Define mid level category of the freelancing service that you provide.
        </InputInfoSpan>

        <SelectElement
          elementName="midLevelCategory"
          id="midLevelCategory"
          className="w-full"
          selectRef={midLevelCategoryRef}
          onChangeHandler={handleMidLevelCategoryChange}
        >
          {midLevelCategories.map((midLevelCategory, key) => {
            return (
              <OptionElement value={midLevelCategory.name} key={key}>
                {midLevelCategory.name}
              </OptionElement>
            );
          })}
        </SelectElement>
      </FormElementContainer>

      <FormElementContainer>
        <LabelElement htmlFor="bottomLevelCategory">
          Bottom Level Category
        </LabelElement>
        <InputInfoSpan className="text-yellow-300">
          Define bottom level category of the freelancing service that you
          provide.
        </InputInfoSpan>

        <SelectElement
          elementName="bottomLevelCategory"
          id="bottomLevelCategory"
          className="w-full"
          selectRef={bottomLevelCategoryRef}
          onChangeHandler={handleBottomLevelCategoryChange}
        >
          {bottomLevelCategories.map((bottomLevelCategory, key) => {
            return (
              <OptionElement value={bottomLevelCategory.name} key={key}>
                {bottomLevelCategory.name}
              </OptionElement>
            );
          })}
        </SelectElement>
      </FormElementContainer>
    </div>
  );
}
