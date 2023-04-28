import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormElementContainer from "../../components/UI/FormElementContainer";
import InputText from "../../components/UI/InputText";
import AdditionalServiceRow from "../../components/sellService/AdditionalServiceRow";
import ButtonPrimary from "./../../components/UI/ButtonPrimary";
import TextareaElement from "../../components/UI/TextareaElement";
import Section from "./../../components/UI/Section";
import ProposalImageSection from "../../components/sellService/ProposalImageSection";
import RequirmentDetails from "../../components/sellService/RequirmentDetails";
import SetTags from "../../components/sellService/SetTags";
import SetFaqs from "../../components/sellService/setFAQs";
import axios from "axios";
import { envVars } from "../../Services/envVars";
import SetTitle from "../../components/sellService/SetTitle";
import SetDescription from "../../components/sellService/SetDescription";
import SetCost from "../../components/sellService/SetCost";
import SetDeliveryDuration from "../../components/sellService/SetDeliveryDuration";

export default function becomeFreelancer() {
  const [additionalServicesArray, setAdditionalServicesArray] = useState([]);

  const extraServiceInputRef = useRef();
  const extraServiceChargeInputRef = useRef();
  const extraServiceDurationInputRef = useRef();

  const [proposal, setProposal] = useState({
    proposalTitle: "",
    proposalDescription: "",
    proposalCost: "",
    proposalDeliveryDuration: "",
    heroImageName: "",
    extraImagesName: [],
    requirements: [],
    tags: [],
    faqs: [],
    extraServices: [
      {
        serviceDescription: "",
        serviceCost: "",
        serviceDuration: "",
      },
    ],
  });

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

  // logging proposals
  useEffect(() => {
    console.log(proposal);
  }, [proposal]);

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

  async function postNewProposalToAPI() {
    try {
      const response = await axios(envVars.BACKEND_API_ENDPOINT_FOR_PROPOSALS, {
        method: "POST",
        data: proposal,
        headers: {
          "x-auth-token": "token",
        },
      });
      console.log(response.data);
    } catch (e) {
      alert("Error Occerered: \n" + e.message);
      console.log(e);
    }
  }

  return (
    <div>
      <Head>
        <title>Sell Freelancing Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gray-800 text-white">
          <h1 className="text-center font-bold text-2xl sm:text-6xl p-5 sm:p-20">
            Create New Proposal
          </h1>
        </div>

        <Section className="flex justify-center items-center min-h-screen bg-gray-900">
          <form className="">
            <SetTitle setProposal={setProposal} proposal={proposal} />

            {/* Description */}
            <SetDescription setProposal={setProposal} proposal={proposal} />

            {/* Cost and Delivery Duraion*/}
            <FormElementContainer>
              <div className="grid  grid-cols-1 sm:grid-cols-2 gap-5">
                <SetCost setProposal={setProposal} proposal={proposal} />
                <SetDeliveryDuration
                  setProposal={setProposal}
                  proposal={proposal}
                />
              </div>
            </FormElementContainer>

            <ProposalImageSection
              setProposal={setProposal}
              proposal={proposal}
            />

            <RequirmentDetails setProposal={setProposal} proposal={proposal} />

            <SetTags setProposal={setProposal} proposal={proposal} />

            <SetFaqs setProposal={setProposal} proposal={proposal} />

            {/* Addition Service  */}
            <FormElementContainer>
              <h6 className="text-white text-2xl mb-6">
                Add additional services(optional)
              </h6>

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
                          {additionalServicesArray.map(
                            (additionalService, key) => {
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
                                  serviceDuration={
                                    additionalService.serviceDuration
                                  }
                                  deleteClickHandler={
                                    handleDeleteAdditionalServiceClick
                                  }
                                  editClickHandler={
                                    handleEditAdditionalServiceClick
                                  }
                                  saveClickHandler={
                                    handleSaveAdditionalServiceClick
                                  }
                                  editMode={additionalService.editMode}
                                />
                              );
                            }
                          )}

                          {/* Add new additional service*/}
                          <tr className="border-b bg-blue-200">
                            <td colSpan="3" className=" px-6 py-4">
                              <FormElementContainer>
                                <span className="text-black text-base">
                                  If you wish, you can offer addition services
                                  on the same proposal for some extra money.
                                </span>
                                <div className="text-black flex flex-col lg:flex-row">
                                  <div className="text-xl mr-2 min-w-fit">
                                    I will
                                  </div>

                                  <TextareaElement
                                    name="additionalService_1"
                                    placeholder={`do something extra`}
                                    textareaRef={extraServiceInputRef}
                                    className={`lg:w-full`}
                                  />
                                  <div className="text-xl mx-2 min-w-fit">
                                    for
                                  </div>

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

                                  <div className="text-xl mx-2 min-w-fit">
                                    days
                                  </div>
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
          </form>
        </Section>
        <div className="flex justify-center bg-gray-800 w-full p-20">
          <ButtonPrimary className={`mr-5`}>Save to Draft</ButtonPrimary>
          <ButtonPrimary onClickHandler={postNewProposalToAPI}>
            Publish
          </ButtonPrimary>
        </div>
      </main>
    </div>
  );
}
