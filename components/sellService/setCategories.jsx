import React, { useEffect, useRef, useState } from "react";
import LabelElement from "../UI/LabelElement";
import InputInfoSpan from "../UI/InputInfoSpan";
import FormElementContainer from "../UI/FormElementContainer";
import { useSelector } from "react-redux";
import SelectElement from "../UI/SelectElement";
import OptionElement from "../UI/OptionElement";

export default function SetCategories({ proposal, setProposal }) {
  const topLevelCategoryRef = useRef();
  const midLevelCategoryRef = useRef();
  const bottomLevelCategoryRef = useRef();

  // get all top, mid and bottom level categories
  const allTopLevelCategories = useSelector(
    (state) => state.topLevelCategories
  );
  const allMidLevelCategories = useSelector(
    (state) => state.midLevelCategories
  );
  const allBottomLevelCategories = useSelector(
    (state) => state.bottomLevelCategories
  );

  const [filteredMidLevelCategories, setFilteredMidLevelCategory] = useState(
    []
  );

  const [filteredBottomLevelCategories, setFilteredBottomLevelCategories] =
    useState([]);

  const handleTopLevelCategoryChange = (e) => {
    // setSelectedTopLevelCategoryID(parseInt(topLevelCategoryRef.current.value));
    const selectedtopLevelCategoryID = parseInt(e.target.value);

    //set top level category on proposal state
    setProposal((prev) => {
      const updatedProposal = { ...prev };
      updatedProposal.topLevelCategoryID = selectedtopLevelCategoryID;
      return updatedProposal;
    });

    // filter mid level categories to show only related mid level categories
    setFilteredMidLevelCategory(
      allMidLevelCategories.filter((midLevelCategory, index) => {
        return (
          midLevelCategory.parent_top_level_category_id ===
          selectedtopLevelCategoryID
        );
      })
    );
    midLevelCategoryRef.current.selectedIndex = 0; //to unselect any previous selected mid level category

    setFilteredBottomLevelCategories([]);
    bottomLevelCategoryRef.current.selectedIndex = 0; //to unselect any previous selected bottom level category
  };

  const handleMidLevelCategoryChange = (e) => {
    //filter `setFilteredBottomLevelCategories`
    const selectedMidLevelCategoryID = parseInt(e.target.value);
    console.log("selectedMidLevelCategoryID = " + selectedMidLevelCategoryID);
    setFilteredBottomLevelCategories(
      allBottomLevelCategories.filter((bottomLevelCategory, index) => {
        return (
          bottomLevelCategory.parent_mid_level_category_id ===
          selectedMidLevelCategoryID
        );
      })
    );
    bottomLevelCategoryRef.current.selectedIndex = 0; //to unselect any previous selected bottom level category

    // set mid level category value on proposal
    setProposal((prev) => {
      const updatedProposal = { ...prev };
      updatedProposal.midLevelCategoryID = selectedMidLevelCategoryID;
      return updatedProposal;
    });
  };

  const handleBottomLevelCategoryChange = (e) => {
    const selectedBottomLevelCategoryID = parseInt(e.target.value);
    console.log(
      "selectedBottomLevelCategoryID = " + selectedBottomLevelCategoryID
    );
    setProposal((prev) => {
      const updatedProposal = { ...prev };
      updatedProposal.bottomLevelCategoryID = selectedBottomLevelCategoryID;
      return updatedProposal;
    });
  };

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
          <OptionElement value={`none`}>Select</OptionElement>
          {allTopLevelCategories.map((topLevelCategory, key) => {
            return (
              <OptionElement value={topLevelCategory.id} key={key}>
                {topLevelCategory.name}
              </OptionElement>
            );
          })}
        </SelectElement>
      </FormElementContainer>

      {/* FIXME: show filtered options only for mid and bottom level category selector */}
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
          disabledFlag={filteredMidLevelCategories.length < 1}
        >
          <OptionElement value={`none`}>Select</OptionElement>
          {filteredMidLevelCategories.map((midLevelCategory, key) => {
            return (
              <OptionElement value={midLevelCategory.id} key={key}>
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
          disabledFlag={filteredBottomLevelCategories.length < 1}
        >
          <OptionElement value={`none`}>Select</OptionElement>
          {filteredBottomLevelCategories.map((bottomLevelCategory, key) => {
            return (
              <OptionElement value={bottomLevelCategory.id} key={key}>
                {bottomLevelCategory.name}
              </OptionElement>
            );
          })}
        </SelectElement>
      </FormElementContainer>
    </div>
  );
}
