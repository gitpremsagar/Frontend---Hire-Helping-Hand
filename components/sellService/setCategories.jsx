import React, { useEffect, useRef, useState } from "react";
import LabelElement from "../UI/LabelElement";
import InputInfoSpan from "../UI/InputInfoSpan";
import InputText from "../UI/InputText";
import FormElementContainer from "../UI/FormElementContainer";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  BACKEND_API_ENDPOINT_FOR_TOP_LEVEL_CATEGORIES,
  envVars,
} from "./../../Services/envVars";

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

  console.log("topLevelCategories", topLevelCategories);
  console.log("midLevelCategories", midLevelCategories);
  console.log("bottomLevelCategories", bottomLevelCategories);

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
        <InputText
          name="topLevelCategory"
          id="topLevelCategory"
          type="text"
          className="w-full"
          inputRef={topLevelCategoryRef}
          onChangeHandler={handleTopLevelCategoryChange}
        />
      </FormElementContainer>

      <FormElementContainer>
        <LabelElement htmlFor="midLevelCategory">
          Mid Level Category
        </LabelElement>
        <InputInfoSpan className="text-yellow-300">
          Define mid level category of the freelancing service that you provide.
        </InputInfoSpan>
        <InputText
          name="midLevelCategory"
          id="midLevelCategory"
          type="text"
          className="w-full"
          inputRef={midLevelCategoryRef}
          onChangeHandler={handleMidLevelCategoryChange}
        />
      </FormElementContainer>

      <FormElementContainer>
        <LabelElement htmlFor="bottomLevelCategory">
          Bottom Level Category
        </LabelElement>
        <InputInfoSpan className="text-yellow-300">
          Define bottom level category of the freelancing service that you
          provide.
        </InputInfoSpan>
        <InputText
          name="bottomLevelCategory"
          id="bottomLevelCategory"
          type="text"
          className="w-full"
          inputRef={bottomLevelCategoryRef}
          onChangeHandler={handleBottomLevelCategoryChange}
        />
      </FormElementContainer>
    </div>
  );
}
