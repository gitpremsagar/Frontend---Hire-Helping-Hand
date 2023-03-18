import React, { useEffect, useState } from "react";
import TestimonialSection from "../../../components/profiles/TestimonialSection";
import { useRouter } from "next/router";
import axios from "axios";
import { envVars } from "./../../../Services/envVars";
import ClientAboutSection from "../../../components/profiles/client-profile/ClientAboutSection";
import ClientLookingForSkills from "../../../components/profiles/client-profile/ClientLookingForSkills";
import ClientProjetsSection from "../../../components/profiles/client-profile/ClientProjetsSection";
import ClientHeroSection from "../../../components/profiles/client-profile/ClientHeroSection";

export default function ClientProfilePage(props) {
  const { loggedInUserInfo, isUserFreelancer, setisUserFreelancer, jwt } =
    props;

  const router = useRouter();

  const [userDetail, setuserDetail] = useState([]);

  async function getUserInfoFromAPI() {
    const userIdOnUrl = router.query.idusers;

    // make request to api to get information about the user
    // FIXME: make request to get information about the client
    try {
      const response = await axios(
        `${envVars.BACKEND_API_FOR_USERS}/${userIdOnUrl}`
      );
      setuserDetail(response.data);
    } catch (error) {
      console.log("error in getting user information = ", error);
    }
  }

  useEffect(() => {
    router.query.idusers && getUserInfoFromAPI();
  }, [router.query.idusers]);

  return (
    <div className="min-h-screen">
      {userDetail.map((user, index) => {
        return (
          <main className="flex flex-col w-full" key={index}>
            {/* Client's Hero Section */}
            <ClientHeroSection
              user={user}
              loggedInUserInfo={loggedInUserInfo}
              jwt={jwt}
              setuserDetail={setuserDetail}
            />
            {/* Client's About me section */}
            <ClientAboutSection />

            {/* Client's Skills section */}
            <ClientLookingForSkills />

            {/* Client's Portfolio section */}
            <ClientProjetsSection />

            {/* Testimonials Section */}
            <TestimonialSection />
          </main>
        );
      })}
    </div>
  );
}
