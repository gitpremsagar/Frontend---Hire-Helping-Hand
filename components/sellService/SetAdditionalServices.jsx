import React, { useRef, useState, useEffect } from "react";
import InputText from "../UI/InputText";
import H6 from "../UI/H6";
import FormElementContainer from "../UI/FormElementContainer";
import AdditionalServiceRow from "./AdditionalServiceRow";
import TextareaElement from "../UI/TextareaElement";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function SetAdditionalService({ proposal, setProposal }) {
  const [additionalServicesArray, setAdditionalServicesArray] = useState([]);

  const extraServiceInputRef = useRef();
  const extraServiceChargeInputRef = useRef();
  const extraServiceDurationInputRef = useRef();

  function handleAddMoreAdditionalServices(e) {
    e.preventDefault();
    const newAdditionalService = {
      serviceDescription: extraServiceInputRef.current.value,
      serviceCost: extraServiceChargeInputRef.current.value,
      serviceDuration: extraServiceDurationInputRef.current.value,
      editMode: false,
    };
    setAdditionalServicesArray((prev) => {
      const newAdditionalServices = [
        ...additionalServicesArray,
        newAdditionalService,
      ];
      // TODO: reset the additional service form
      return newAdditionalServices;
    });
  }

  // add additional services array to the proposal on additional service array change
  useEffect(() => {
    setProposal((prev) => {
      const newProposal = { ...proposal };
      newProposal.extraServices = additionalServicesArray;
      return newProposal;
    });
  }, [additionalServicesArray]);

  let colourChanger = false; //this variable is responsible for changing colours of rows of table

  function handleDeleteAdditionalServiceClick(indexOfAdditionalService) {
    setAdditionalServicesArray(
      additionalServicesArray.filter((_, index) => {
        return index !== indexOfAdditionalService;
      })
    );
    console.log(`Delete Clicked!  index = ${indexOfAdditionalService}`);
  }

  function handleEditAdditionalServiceClick(indexOfAdditionalService) {
    setAdditionalServicesArray((prev) => {
      const newArray = [...prev];
      newArray[indexOfAdditionalService].editMode = true;
      return newArray;
    });
    console.log(`Edit clicked! index = ${indexOfAdditionalService}`);
  }

  function handleSaveAdditionalServiceClick(
    indexOfAdditionalService,
    newDataOfAdditionalServices
  ) {
    setAdditionalServicesArray((prev) => {
      const newArray = [...prev];
      newArray[indexOfAdditionalService] = newDataOfAdditionalServices;
      return newArray;
    });
    console.log(`Edit clicked! index = ${indexOfAdditionalService}`);
  }

  return (
    <FormElementContainer>
      <H6 className="text-white">Add additional services(optional)</H6>

      {/* Addtional Services List Table */}
      <div className="flex flex-col border-2 my-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                {additionalServicesArray.length < 1 ? (
                  <thead className="border-b bg-white font-medium">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Additional Service
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Make Changes
                      </th>
                    </tr>
                  </thead>
                ) : (
                  <thead className="border-b bg-white font-medium">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Additional Service
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Make Changes
                      </th>
                    </tr>
                  </thead>
                )}

                <tbody>
                  {additionalServicesArray.map((additionalService, key) => {
                    colourChanger = !colourChanger;
                    return (
                      <AdditionalServiceRow
                        key={key}
                        index={key + 1}
                        colourChanger={colourChanger}
                        serviceDescription={
                          additionalService.serviceDescription
                        }
                        serviceCost={additionalService.serviceCost}
                        serviceDuration={additionalService.serviceDuration}
                        deleteClickHandler={handleDeleteAdditionalServiceClick}
                        editClickHandler={handleEditAdditionalServiceClick}
                        saveClickHandler={handleSaveAdditionalServiceClick}
                        editMode={additionalService.editMode}
                      />
                    );
                  })}

                  {/* Add new additional service*/}
                  <tr className="border-b bg-blue-200">
                    <td colSpan="3" className=" px-6 py-4">
                      <FormElementContainer>
                        <span className="text-black text-base">
                          If you wish, you can offer addition services on the
                          same proposal for some extra money.
                        </span>
                        <div className="text-black flex flex-col lg:flex-row">
                          <div className="text-xl mr-2 min-w-fit">I will</div>

                          <TextareaElement
                            name="additionalService_1"
                            placeholder={`do something extra`}
                            textareaRef={extraServiceInputRef}
                            className={`lg:w-full`}
                          />
                          <div className="text-xl mx-2 min-w-fit">for</div>

                          <InputText
                            name="additionalService_1_price"
                            placeholder={`money`}
                            inputRef={extraServiceChargeInputRef}
                          />

                          <div className="text-xl mx-2 min-w-fit">
                            more and additional
                          </div>

                          <InputText
                            name="additionalService_1_duration"
                            placeholder={`days`}
                            inputRef={extraServiceDurationInputRef}
                          />

                          <div className="text-xl mx-2 min-w-fit">days</div>
                          <button
                            className={`px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg ml-2 flex items-center`}
                            onClick={handleAddMoreAdditionalServices}
                          >
                            <AddCircleIcon className="mr-2" /> Add
                          </button>
                        </div>
                      </FormElementContainer>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </FormElementContainer>
  );
}
