import Head from "next/head";
import { useEffect, useState } from "react";
import FormElementContainer from "../../components/UI/FormElementContainer";
import ButtonPrimary from "./../../components/UI/ButtonPrimary";
import Section from "./../../components/UI/Section";
import ProposalImageSection from "../../components/sellService/ProposalImageSection";
import RequirmentDetails from "../../components/sellService/RequirmentDetails";
import SetTags from "../../components/sellService/SetTags";
import SetFaqs from "../../components/sellService/setFAQs";
import axios from "axios";
import {
  BACKEND_API_ENDPOINT_FOR_BOTTOM_LEVEL_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_MID_LEVEL_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_TOP_LEVEL_CATEGORIES,
  envVars,
} from "../../Services/envVars";
import SetTitle from "../../components/sellService/SetTitle";
import SetDescription from "../../components/sellService/SetDescription";
import SetCost from "../../components/sellService/SetCost";
import SetDeliveryDuration from "../../components/sellService/SetDeliveryDuration";
import SetAdditionalService from "../../components/sellService/SetAdditionalServices";
import SetCategories from "../../components/sellService/setCategories";
import { useDispatch } from "react-redux";
import {
  setTopLevelCategories,
  setMidLevelCategories,
  setBottomLevelCategories,
} from "../../redux/categoriesSlice";

export default function becomeFreelancer() {
  const [proposal, setProposal] = useState({
    proposalTitle: "",
    proposalDescription: "",
    topLevelCategory: "",
    midLevelCategory: "",
    bottomLevelCategory: "",
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

  const dispatch = useDispatch();

  //   fetch all the categories and update redux states
  useEffect(async () => {
    async function fetchAndUpdateTopLevelCategories() {
      try {
        const [
          topLevelCatResponse,
          midLevelCatResponse,
          bottomLevelCatResponse,
        ] = await Promise.all([
          axios.get(BACKEND_API_ENDPOINT_FOR_TOP_LEVEL_CATEGORIES),
          axios.get(BACKEND_API_ENDPOINT_FOR_MID_LEVEL_CATEGORIES),
          axios.get(BACKEND_API_ENDPOINT_FOR_BOTTOM_LEVEL_CATEGORIES),
        ]);
        dispatch(setTopLevelCategories(topLevelCatResponse.data));
        dispatch(setMidLevelCategories(midLevelCatResponse.data));
        dispatch(setBottomLevelCategories(bottomLevelCatResponse.data));
      } catch (error) {
        alert("Error: " + error.message);
        console.log(error);
      }
    }
    fetchAndUpdateTopLevelCategories();
  }, []);

  // logging proposals
  useEffect(() => {
    console.log("proposal = ", proposal);
  }, [proposal]);

  async function postNewProposalToAPI(mode) {
    try {
      const response = await axios(envVars.BACKEND_API_ENDPOINT_FOR_PROPOSALS, {
        method: "POST",
        data: {
          proposal,
          proposalMode: mode,
        },
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

            <SetCategories setProposal={setProposal} proposal={proposal} />

            <ProposalImageSection
              setProposal={setProposal}
              proposal={proposal}
            />

            <RequirmentDetails setProposal={setProposal} proposal={proposal} />

            <SetTags setProposal={setProposal} proposal={proposal} />

            <SetFaqs setProposal={setProposal} proposal={proposal} />

            <SetAdditionalService
              setProposal={setProposal}
              proposal={proposal}
            />
          </form>
        </Section>
        <div className="flex justify-center bg-gray-800 w-full p-20">
          <ButtonPrimary
            className={`mr-5`}
            onClickHandler={() => {
              postNewProposalToAPI("draft");
            }}
          >
            Save to Draft
          </ButtonPrimary>
          <ButtonPrimary
            onClickHandler={() => {
              postNewProposalToAPI("published");
            }}
          >
            Publish
          </ButtonPrimary>
        </div>
      </main>
    </div>
  );
}
