import Head from "next/head";
import H2 from "../../components/UI/H2";
import Para from "./../../components/UI/Para";
import Section from "../../components/UI/Section";
import ButtonPrimary from "../../components/UI/ButtonPrimary";
import Link from "next/link";
import H3 from "../../components/UI/H3";
import SectionOverlay from "../../components/UI/SectionOverlay";
import SideHeadingH6 from "../../components/UI/SideHeadingH6";

export default function PostJobWelcomePage() {
  // FIXME: redirect user to the New Job page if already logged in
  return (
    <div>
      <Head>
        <title>Post a job</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Section
          className={`bg-[url("/post-job/hero-background.jpg")] bg-cover bg-center relative bg-fixed`}
        >
          <SectionOverlay />
          <div className="relative z-30 text-white">
            <H2>
              <Link href={`/signup`}> Sign up</Link> or
              <Link href={`login`}> log in </Link>now to start posting new jobs
              and find the right freelancer for your project.
            </H2>
            <Para>
              You'll need to create an account or log in to post new job.
              Signing up is free, quick and easy and only takes a few minutes.
            </Para>

            <Link href={`/signup`}>
              <a>
                <ButtonPrimary>Sign-up</ButtonPrimary>
              </a>
            </Link>
            <Link href={`login`}>
              <a>
                <ButtonPrimary>Login</ButtonPrimary>
              </a>
            </Link>

            <Para>
              By creating an account, you'll be able to browse through thousands
              of talented freelancers, post jobs, and manage payments all in one
              place. Our platform is designed to make it easy for you to find
              the right freelancer for your project and get the job done quickly
              and efficiently.
            </Para>

            <Para>
              So why wait? Sign up or log in now to start posting new jobs and
              find the right freelancer for your project.
            </Para>
          </div>
        </Section>

        <Section className={`bg-gray-200`}>
          <H3>How does it work?</H3>
          <Para>
            <SideHeadingH6> Create a job post: </SideHeadingH6>The first step is
            for the client to create a job post, describing the project
            requirements and any other relevant details. The client will also
            need to pay upfront for the project, with the payment held in escrow
            by Hire Helping Hand.
          </Para>
          <Para>
            <SideHeadingH6>Review applications:</SideHeadingH6> Once the job
            post is live, freelancers can apply to work on the project by
            submitting a proposal or bid. The client can review these
            applications and choose the freelancer they feel is the best fit for
            the job.
          </Para>
          <Para>
            <SideHeadingH6>Make Payment: </SideHeadingH6>Make payment for
            selected proposal or bid of your choice. The payment held in escrow
            will be released to the freelancer once the job is complete and
            delivered.
          </Para>
          <Para>
            <SideHeadingH6>Watch progress:</SideHeadingH6> Once the payment has
            been made, the freelancer can begin working on the project. The
            client can track the progress of the project through the platform
            and communicate with the freelancer as needed.
          </Para>
          <Para>
            <SideHeadingH6>Approve work to release payment:</SideHeadingH6> Once
            the project is complete, the client can review the work and approve
            it if they are satisfied. Payment is then released from escrow and
            made to the freelancer.
          </Para>
          <Para>
            <SideHeadingH6>Request Refund:</SideHeadingH6> If the client is not
            satisfied with the work, they can request a refund through the
            platform. The dispute resolution process will begin and Hire Helping
            Hand will mediate the process. The payment held in escrow will be
            refunded to the client(after cutting taxes and charges if required)
            and the freelancer will not receive payment.
          </Para>
        </Section>

        <Section>
          <H3>Freelancing Services Categories</H3>
        </Section>
      </main>

      <footer></footer>
    </div>
  );
}
