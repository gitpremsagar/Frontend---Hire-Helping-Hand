import Head from "next/head";
import AsideLeftOfDashboard from "../../../components/userDashboard/AsideLeftOfDashboard";
import { useRouter } from "next/router";
import H1 from "./../../../components/UI/H1";
import Section from "./../../../components/UI/Section";

import { useEffect, useState } from "react";
import ProjectCardForFreelancer from "../../../components/userDashboard/ProjectCardForFreelancer/ProjectCardForFreelancer";
import axios from "axios";
import { BACKEND_API_ENDPOINT_FOR_GETTING_ONGOING_PROJECTS_BY_FREELANCER_ID } from "../../../Services/envVars";
// import { authSlice } from './../../../redux/authSlice';
import { useSelector } from "react-redux";

export default function UserDashboardPage(props) {
  const router = useRouter();
  const freelancer_id = router.query.idusers;

  // const { loggedInUserInfo } = props;

  // get token from redux store
  const token = useSelector((state) => state.authSlice.jwtToken);

  const [onGoingProjects, setOngoingProjects] = useState([
    {
      id: 4,
      title: "Database Design",
      description: "Design a database for a healthcare system",
      budget: "$1500",
      deadline: "2024-04-15",
    },
    {
      id: 5,
      title: "API Development",
      description: "Develop an API for a mobile application",
      budget: "$2500",
      deadline: "2024-05-20",
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "Design the UI/UX for a web application",
      budget: "$1200",
      deadline: "2024-06-30",
    },
  ]);

  // fetch the ongoing projects from the backend using axios
  useEffect(() => {
    console.log("freelancer_id from url: ", freelancer_id);
    console.log("token from redux store: ", token);
    // return if freelancer_id or token is not available
    if (!freelancer_id || !token) {
      return;
    }

    axios
      .get(
        `${BACKEND_API_ENDPOINT_FOR_GETTING_ONGOING_PROJECTS_BY_FREELANCER_ID}/${freelancer_id}`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        console.log("ongoing projects request response.data: ", response.data);
        // setOngoingProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [freelancer_id, token]);

  return (
    <div className="">
      <Head>
        <title>Dashboard</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="lg:grid lg:grid-cols-12">
        <div className="col-span-2">
          <AsideLeftOfDashboard />
        </div>

        <div className="col-span-10">
          <main className="">
            <Section>
              <H1>Ongoning Projects</H1>
              {onGoingProjects.map((project) => {
                return (
                  <ProjectCardForFreelancer
                    project={project}
                    key={project.id}
                  />
                );
              })}
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}
