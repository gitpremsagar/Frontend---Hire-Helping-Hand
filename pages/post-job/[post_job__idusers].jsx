import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../../components/UI/Section";
import H1 from "../../components/UI/H1";
import H6 from "../../components/UI/H6";
import SetProjectTitle from "../../components/post-job/SetProjectTitle";
import SetProjectDescription from "../../components/post-job/SetProjectDescription";
import SetProjectBudget from "../../components/post-job/SetProjectBudget";
import SetCategorySection from "../../components/post-job/SetCategorySection";
import FormElementContainer from "../../components/UI/FormElementContainer";
import SetProjectDeadline from "../../components/post-job/SetProjectDeadline";
import { useDispatch } from "react-redux";
import {
  BACKEND_API_ENDPOINT_FOR_TOP_LEVEL_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_MID_LEVEL_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_BOTTOM_LEVEL_CATEGORIES,
  REDIRECT_TO_LOGIN_PAGE_IF_NO_TOKEN_PRESENT,
} from "../../Services/envVars";

import {
  setTopLevelCategories,
  setMidLevelCategories,
  setBottomLevelCategories,
} from "../../redux/categoriesSlice";
import SetRequiredSkills from "../../components/post-job/SetRequiredSkills";
import AttachFiles from "../../components/post-job/AttachFiles";
import SetProjectTags from "./../../components/post-job/SetProjectTags";
import ButtonPrimary from "../../components/UI/ButtonPrimary";
import SetProjectThumbnail from "../../components/post-job/SetProjectThumbnail";

export default function becomeFreelancer() {
  REDIRECT_TO_LOGIN_PAGE_IF_NO_TOKEN_PRESENT();

  const [projectID, setProjectID] = useState(false);
  const [projectUpdateCounter, setProjectUpdateCounter] = useState(0);
  const [timer, setTimer] = useState(null);

  const [project, setProject] = useState({
    projectTitle: "",
    projectDescription: "",
    topLevelCategoryID: "",
    midLevelCategoryID: "",
    bottomLevelCategoryID: "",
    projectBudget: "",
    projectDeadline: "",
    heroImageName: "",
    extraImagesName: [],
    requirements: [],
    tags: [],
    requiredSkills: [],
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

  //show message to enter title first
  useEffect(() => {
    console.log("project = ", project);
    if (project.projectTitle == "" && projectUpdateCounter > 2)
      alert("Please enter proposal title first!");
    setProjectUpdateCounter((prev) => prev + 1);
  }, [project]);

  // auto post project to auto save the changes
  useEffect(() => {
    // clear the previous timer (if any) whenever project changes
    if (timer) clearTimeout(timer);

    // start a new timer
    const newTimer = setTimeout(() => {
      // if (projectUpdateCounter > 2) postNewProjectToAPI("draft");
      console.log("saving changes!"); //TODO:
    }, 6000);

    //set the new timer in the state
    setTimer(newTimer);

    // Cleanup: Clear the timer if this effect unmounts
    return () => {
      clearTimeout(newTimer);
    };
  }, [project]);

  async function postNewProjectToAPI(mode) {
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
      console.log("proposal post response  = ", response.data);
    } catch (e) {
      alert("Error Occerered: \n" + e.message);
      console.log(e);
    }
  }
  return (
    <div>
      <Head>
        <title>Post a job</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Section className="flex justify-center items-center min-h-screen bg-gray-900">
          <div className="w-full">
            <div className="bg-gray-800 text-white p-5 sm:p-10 md:p-15 lg:p-20 mb-5 sm:mb-10 md:mb-15 lg:mb-20 rounded-lg overflow-hidden ">
              <H1 className="text-center">Create New Project</H1>
              <H6
                className={`text-center mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-yellow-300`}
              >
                Project is a detailed information of the kind of freelancing
                service you need and the amount you are willing to pay for the
                service you need.
              </H6>
            </div>
            <form>
              <SetProjectTitle project={project} setProject={setProject} />
              <SetProjectDescription
                project={project}
                setProject={setProject}
              />

              {/* Cost and Delivery Duraion*/}
              <FormElementContainer>
                <div className="grid  grid-cols-1 sm:grid-cols-2 gap-5">
                  <SetProjectBudget project={project} setProject={setProject} />
                  <SetProjectDeadline
                    project={project}
                    setProject={setProject}
                  />
                </div>
              </FormElementContainer>

              <SetCategorySection project={project} setProject={setProject} />

              <SetProjectThumbnail project={project} setProject={setProject} />

              <SetRequiredSkills project={project} setProject={setProject} />

              <AttachFiles />

              <SetProjectTags project={project} setProject={setProject} />

              <div className="flex justify-center bg-gray-800 w-full p-20">
                <ButtonPrimary
                  className={`mr-5`}
                  onClickHandler={() => {
                    postNewProjectToAPI("draft");
                  }}
                >
                  Save to Draft
                </ButtonPrimary>
                <ButtonPrimary
                  onClickHandler={() => {
                    postNewProjectToAPI("published");
                  }}
                >
                  Publish
                </ButtonPrimary>
              </div>
            </form>
          </div>
        </Section>
      </main>
    </div>
  );
}
