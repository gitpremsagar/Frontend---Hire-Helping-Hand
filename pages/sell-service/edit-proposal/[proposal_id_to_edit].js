// TODO: publish proposal then redirect user to dashboard
// TODO: save proposal to draft then redirect user to dashboard
import Head from "next/head";
import { useEffect, useState } from "react";
import FormElementContainer from "../../../components/UI/FormElementContainer";
import ButtonPrimary from "../../../components/UI/ButtonPrimary";
import Section from "../../../components/UI/Section";
import ProposalImageSection from "../../../components/sellService/ProposalImageSection";
import RequirmentDetails from "../../../components/sellService/RequirmentDetails";
import SetTags from "../../../components/sellService/SetTags";
import SetFaqs from "../../../components/sellService/setFAQs";
import axios from "axios";
import {
  BACKEND_API_ENDPOINT_FOR_BOTTOM_LEVEL_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_MID_LEVEL_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_TOP_LEVEL_CATEGORIES,
  envVars,
} from "../../../Services/envVars";
import SetTitle from "../../../components/sellService/SetTitle";
import SetDescription from "../../../components/sellService/SetDescription";
import SetCost from "../../../components/sellService/SetCost";
import SetDeliveryDuration from "../../../components/sellService/SetDeliveryDuration";
import SetAdditionalService from "../../../components/sellService/SetAdditionalServices";
import SetCategories from "../../../components/sellService/setCategories";
import { useDispatch, useSelector } from "react-redux";
import {
  setTopLevelCategories,
  setMidLevelCategories,
  setBottomLevelCategories,
} from "../../../redux/categoriesSlice";
import H1 from "../../../components/UI/H1";
import H6 from "../../../components/UI/H6";
import { useRouter } from "next/router";

export default function becomeFreelancer() {
  // get proposal_id_to_edit from url
  const router = useRouter();
  const { proposal_id_to_edit } = router.query;

  // get token from redux state
  const token = useSelector((state) => state.authSlice.jwtToken);

  const [proposal, setProposal] = useState({
    proposalTitle: "",
    proposalID: "",
    proposalDescription: "",
    topLevelCategoryID: 1, //FIXME: remove this default value
    midLevelCategoryID: 1, //FIXME: remove this default value
    bottomLevelCategoryID: 1, //FIXME: remove this default value
    proposalCost: 0,
    proposalDeliveryDuration: 0,
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

  // fetch proposal details from API, send token with the request
  useEffect(() => {
    if (proposal_id_to_edit === undefined || token === null) {
      return;
    }

    async function fetchProposalDetails() {
      console.log("fetching proposal details");
      try {
        const response = await axios(
          `${envVars.BACKEND_API_ENDPOINT_FOR_PROPOSALS}/${proposal_id_to_edit}`,
          {
            headers: {
              "x-auth-token": token,
            },
          }
        );
        // console.log("response = ", response.data);
        // response sample
        //   {
        //     "proposal_id": 131,
        //     "title": "this is test title",
        //     "description": "test descriton",
        //     "top_level_category": "Programming & Tech",
        //     "mid_level_category": "Web Development",
        //     "price_basic": "4.00",
        //     "price_medium": null,
        //     "price_top": null,
        //     "created_at": "2024-03-08T05:23:07.000Z",
        //     "updated_at": "2024-03-08T05:28:40.000Z",
        //     "freelancer_id": 21,
        //     "thumbnail_links": [],
        //     "faqs": [],
        //     "tags": "",
        //     "requirements_detail": [],
        //     "delivery_duration": 3,
        //     "average_rating": null,
        //     "is_blacklisted": 0,
        //     "is_top_rated": 0,
        //     "total_customers_served": null,
        //     "freelancer_location": null,
        //     "number_of_clicks": 0,
        //     "number_of_appearance_in_search": 0,
        //     "number_of_times_search_term_appear": 0,
        //     "bottom_level_category": "Front-End Development",
        //     "mode": "draft",
        //     "heroImageName": ""
        // }

        // convert tags string into array
        response.data.tags = response.data.tags.split(",");

        // update proposal state with fetched proposal details
        setProposal((prevProposal) => {
          const newProposal = { ...prevProposal };
          newProposal.proposalID = response.data.proposal_id;
          newProposal.proposalTitle = response.data.title;
          newProposal.proposalDescription = response.data.description;
          (newProposal.topLevelCategoryID = 1), //response.data.top_level_category;
            (newProposal.midLevelCategoryID = 1), //response.data.mid_level_category;
            (newProposal.bottomLevelCategoryID = 1),
            //response.data.bottom_level_category;
            (newProposal.proposalCost = response.data.price_basic);
          newProposal.proposalDeliveryDuration =
            response.data.delivery_duration;
          newProposal.heroImageName = response.data.heroImageName;
          newProposal.extraImagesName = response.data.thumbnail_links;
          newProposal.requirements = response.data.requirements_detail;
          newProposal.tags = response.data.tags;
          newProposal.faqs = response.data.faqs;
          newProposal.extraServices = response.data.extraServices;
          return newProposal;
        });
      } catch (error) {
        // alert("Error: " + error.message);
        console.log(error);
      }
    }
    fetchProposalDetails();
  }, [proposal_id_to_edit, token]);

  const [proposalUpdateCounter, setProposalUpdateCounter] = useState(0); //proposalUpdateCounter to avoid msg prompt on page load
  const [timer, setTimer] = useState(null); //timer to autopost the proposal

  const dispatch = useDispatch();

  //   fetch all the categories and update redux states
  useEffect(async () => {
    async function fetchAndUpdateAllLevelCategories() {
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
    fetchAndUpdateAllLevelCategories();
  }, []);

  // auto post proposal to auto save the changes after 1 second(s) of any change in proposal
  useEffect(() => {
    //clear previouse timer if any
    clearTimeout(timer);

    //create new timer
    const newTimer = setTimeout(() => {
      //is there anything to upload?
      if (proposal.proposalTitle != "") {
        console.log("saving changes!");
        // if this is a new proposal then post it otherwise update it
        if (proposal.proposalID === "") {
          postNewProposalToAPI("draft");
        } else {
          updateProposalToAPI("draft");
        }
      } else {
        console.log("there is no title to save");
      }
    }, 1000);

    //save timer in state
    setTimer(newTimer);

    //Cleanup: clear timer if this effect unmounts
    return () => {
      clearTimeout(newTimer);
    };
  }, [proposal]);

  //post this proposal to API
  async function postNewProposalToAPI(mode) {
    console.log("Post called!");
    try {
      const response = await axios(envVars.BACKEND_API_ENDPOINT_FOR_PROPOSALS, {
        method: "POST",
        data: {
          proposal,
          proposalMode: mode,
        },
        headers: {
          "x-auth-token": token,
        },
      });

      // update `proposal` state with proposalID of inserted proposal
      console.log(response.data);
      setProposal((prevProposal) => {
        const newProposal = { ...prevProposal };
        newProposal.proposalID = response.data.lastInsertID;
        return newProposal;
      });
    } catch (e) {
      // alert("Error Occerered: \n" + e.message);
      console.log(e);
    }
  }

  async function updateProposalToAPI(mode) {
    console.log("update called!");
    try {
      const response = await axios(
        `${envVars.BACKEND_API_ENDPOINT_FOR_PROPOSALS}/${proposal.proposalID}`,
        {
          method: "PUT",
          data: {
            proposal,
            proposalMode: mode,
          },
          headers: {
            "x-auth-token": token,
          },
        }
      );

      // proposal updated
      console.log("proposal update response = ", response.data);
    } catch (e) {
      // alert("Error Occerered: \n" + e.message);
      console.log(e);
    }
  }

  //show message to enter proposal title first and update `proposalUpdateCounter`
  useEffect(() => {
    console.log("proposal = ", proposal);
    setProposalUpdateCounter((prev) => prev + 1); //increament counter
    if (proposal.proposalTitle == "" && proposalUpdateCounter > 2) {
      alert("Please enter title before entering anything else!");
    }
  }, [proposal]);

  // handle save to draft button click
  const saveToDraft = () => {
    //is there anything to upload?
    if (proposal.proposalTitle != "" && proposalUpdateCounter > 2) {
      console.log("saving changes!");
      // if this is a new proposal then post it otherwise update it
      if (proposal.proposalID === "") {
        console.log("firstTimeSaveAsDraft");
        postNewProposalToAPI("draft");
      } else {
        console.log("updateSaveAsDraft");
        updateProposalToAPI("draft");
      }
    } else {
      console.log("there is no title to save");
    }
  };

  // handle publish button click
  const publishProposal = () => {
    //check if proposal state's title, description, cost, delivery duration, top level category, mid level category, bottom level category are not empty
    if (
      proposal.proposalTitle != "" &&
      proposal.proposalDescription != "" &&
      proposal.proposalCost != 0 &&
      proposal.proposalDeliveryDuration != 0 &&
      proposal.topLevelCategoryID != "" && //FIXME: remove this default value
      proposal.midLevelCategoryID != "" && //FIXME: remove this default value
      proposal.bottomLevelCategoryID != "" //FIXME: remove this default value
    ) {
      // if this is a new proposal then post it otherwise update it
      if (proposal.proposalID === "") {
        console.log("firstTimeSaveAsPublished");
        postNewProposalToAPI("published");
      } else {
        console.log("updateSaveAsPublished");
        updateProposalToAPI("published");
      }
    } else {
      alert(
        "Please fill all the required fields before publishing the proposal"
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Editing Proposal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Section className="flex justify-center items-center min-h-screen bg-gray-900">
          <div>
            <div className="bg-gray-800 text-white p-5 sm:p-10 md:p-15 lg:p-20 mb-5 sm:mb-10 md:mb-15 lg:mb-20 rounded-lg overflow-hidden">
              <H1 className="text-center">Edit Proposal </H1>
              <H6
                className={`text-center mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-yellow-300`}
              >
                Proposal is detailed information of the kind of freelancing
                service you provide and the amount you charge for it.
              </H6>
            </div>
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

              <RequirmentDetails
                setProposal={setProposal}
                proposal={proposal}
              />

              <SetTags setProposal={setProposal} proposal={proposal} />

              <SetFaqs setProposal={setProposal} proposal={proposal} />

              <SetAdditionalService
                setProposal={setProposal}
                proposal={proposal}
              />
            </form>
          </div>
        </Section>
        <div className="flex justify-center bg-gray-800 w-full p-20">
          <ButtonPrimary className={`mr-5`} onClickHandler={saveToDraft}>
            Save to Draft
          </ButtonPrimary>
          <ButtonPrimary onClickHandler={publishProposal}>
            Publish
          </ButtonPrimary>
        </div>
      </main>
    </div>
  );
}
