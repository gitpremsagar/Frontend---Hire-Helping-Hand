import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import FormElementContainer from "../../components/UI/FormElementContainer";
import TncStar from "../../components/UI/tncStar";
import InputText from "../../components/UI/InputText";
import AdditionalServiceRow from "../../components/sellService/AdditionalServiceRow";

export default function becomeFreelancer() {
  const [additionalServicesArray, setAdditionalServicesArray] = useState([1]);

  const proposalTitleRef = useRef();
  const proposalDescriptionRef = useRef();
  const proposalCostRef = useRef();
  const proposalDeliveryDurationRef = useRef();

  const [proposal, setProposal] = useState({
    proposalTitle: "",
    proposalDescription: "",
    proposalCost: "",
    proposalDeliveryDuration: "",
    extraServices: [
      {
        serviceDescription: "",
        serviceCost: "",
        serviceDuration: "",
      },
    ],
  });

  function handleProposalTitleChange() {
    setProposal((prevProposal) => {
      const newProposal = { ...prevProposal };
      newProposal.proposalTitle = proposalTitleRef.current.value;
      return newProposal;
    });
  }

  function handleAddMoreAdditionalServices(e) {
    e.preventDefault();
    setAdditionalServicesArray((prev) => {
      const newAdditionalServices = [...additionalServicesArray, "one more"];
      return newAdditionalServices;
    });
  }

  return (
    <div>
      <Head>
        <title>Sell Freelancing Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gray-800 text-white">
          <h1 className="text-center font-bold text-6xl p-20">
            Create New Proposal
          </h1>
        </div>

        <section className="flex justify-center items-center min-h-screen bg-gray-900">
          <form className="min-w-[1200px]">
            {/* Title */}
            <FormElementContainer>
              <label
                htmlFor="proposalTitle"
                className="block text-white text-2xl mb-6"
              >
                Proposal Title
              </label>
              <span className="text-yellow-300">
                <TncStar />
                Give the title for the freelanceing service you provide.
              </span>
              <input
                name="proposalTitle"
                id="proposalTitle"
                type="text"
                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 border-2 border-blue-500"
                onChange={handleProposalTitleChange}
                ref={proposalTitleRef}
              />
            </FormElementContainer>

            {/* Description */}
            <FormElementContainer>
              <label
                htmlFor="proposalDescription"
                className="block text-white text-2xl mb-6"
              >
                Proposal Description
              </label>
              <span className="text-yellow-300">
                <TncStar />
                Give detailed description of the freelanceing service you
                provide.
              </span>
              <textarea
                name="proposalDescription"
                rows={10}
                id="proposalDescription"
                type="text"
                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 border-2 border-blue-500"
                ref={proposalDescriptionRef}
              />
            </FormElementContainer>

            {/* Addition Service  */}
            <FormElementContainer>
              <h6 className="text-white text-2xl mb-6">
                Add additional services(optional)
              </h6>

              {/* Addtional Services List Table */}
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light">
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
                        <tbody>
                          {additionalServicesArray.map((additionalService) => {
                            return (
                              <AdditionalServiceRow key={additionalService} />
                            );
                          })}

                          {/* Add new additional service */}
                          <tr className="border-b bg-neutral-100">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              3
                            </td>
                            <td
                              colSpan="2"
                              className="whitespace-nowrap px-6 py-4"
                            >
                              <FormElementContainer>
                                <span className="text-black text-base">
                                  If you wish, you can offer addition services
                                  on the same proposal for some extra money.
                                </span>
                                <div className="flex items-center text-black">
                                  <div className="text-xl mr-2 min-w-fit">
                                    I will
                                  </div>

                                  <InputText
                                    name="additionalService_1"
                                    placeholder={`do something extra`}
                                    className={`w-full`}
                                  />
                                  <div className="text-xl mx-2 min-w-fit">
                                    for more
                                  </div>

                                  <InputText
                                    name="additionalService_1_price"
                                    placeholder={`money`}
                                  />

                                  <button
                                    className={`px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg ml-2`}
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
        </section>
      </main>
    </div>
  );
}
