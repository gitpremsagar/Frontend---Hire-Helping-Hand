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
} from "../../Services/envVars";

import {
  setTopLevelCategories,
  setMidLevelCategories,
  setBottomLevelCategories,
} from "../../redux/categoriesSlice";
import SetRequiredSkills from "../../components/post-job/SetRequiredSkills";
import { AttachFile } from "@mui/icons-material";
import AttachFiles from "../../components/post-job/AttachFiles";
import SetProjectTags from "./../../components/post-job/SetProjectTags";
import ButtonPrimary from "../../components/UI/ButtonPrimary";

export default function becomeFreelancer() {
  // Schedule a function to run after 5 seconds
  const timeoutId = setTimeout(() => {
    console.log("Timeout function executed");
  }, 5000);

  // Later, if you want to cancel the timeout before it runs
  clearTimeout(timeoutId);

  const [projectID, setProjectID] = useState(false);
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

  useEffect(() => {
    console.log("project = ", project);
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
      console.log(response.data);
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
                project is detailed information of the kind of freelancing
                service you provide and the amount you charge for it.
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
