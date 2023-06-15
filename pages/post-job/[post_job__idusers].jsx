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

  const handleProjectSubmit = async (event) => {
    event.preventDefault();
  };
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
            </form>
          </div>
        </Section>
      </main>
    </div>
  );
}
