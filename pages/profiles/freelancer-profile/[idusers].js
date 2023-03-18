import React, { useEffect, useState } from "react";
import TestimonialSection from "../../../components/profiles/TestimonialSection";
import { useRouter } from "next/router";
import axios from "axios";
import { envVars } from "../../../Services/envVars";
import FreelancerAboutSection from "./../../../components/profiles/freelancer-profile/FreelancerAboutSection";
import FreelancerSkillsSection from "./../../../components/profiles/freelancer-profile/FreelancerSkillsSection";
import FreelancerProposalsSection from "../../../components/profiles/freelancer-profile/FreelancerProposalsSection";
import FreelancerPortfolioSection from "./../../../components/profiles/freelancer-profile/FreelancerPortfolioSection";
import FreelancerHeroSection from "../../../components/profiles/freelancer-profile/FreelancerHeroSection";

export default function FreelancerProfilePage(props) {
  const { loggedInUserInfo, isUserFreelancer, setisUserFreelancer, jwt } =
    props;

  const router = useRouter();

  const [userDetail, setuserDetail] = useState([]);

  async function getUserInfoFromAPI() {
    const userIdOnUrl = router.query.idusers;

    // make request to api to get information about the user
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
            <FreelancerHeroSection
              user={user}
              loggedInUserInfo={loggedInUserInfo}
              jwt={jwt}
              setuserDetail={setuserDetail}
            />

            {/* Freelancer's About me section */}
            <FreelancerAboutSection />

            {/* Freelancer's Skills section */}
            <FreelancerSkillsSection />

            {/* Freelancers Proposals Section */}
            <FreelancerProposalsSection />

            {/* Freelancer's Portfolio section */}
            <FreelancerPortfolioSection />

            {/* Testimonials Section */}
            <TestimonialSection />
          </main>
        );
      })}
    </div>
  );
}
