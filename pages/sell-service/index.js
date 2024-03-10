// TODO: Save proposal automatically as draft on every change after 10 second idle timeout
// TODO: publish proposal then redirect user to dashboard
import Head from "next/head";
import FormElementContainer from "../../components/UI/FormElementContainer";
import ButtonPrimary from "../../components/UI/ButtonPrimary";
import Section from "../../components/UI/Section";
import H1 from "../../components/UI/H1";
import H6 from "../../components/UI/H6";

export default function CreateProposalLangingPage() {
  return (
    <div>
      <Head>
        <title>Sell Freelancing Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section>
          <H1>Sell Your Service</H1>
          <H6>
            Welcome, freelancer! As a talented freelancer on Hire Helping Hand,
            you have the skills and expertise to tackle exciting projects. Don't
            miss out on valuable opportunities to showcase your abilities and
            secure new clients. Logged-in freelancers can create proposals for
            projects they're interested in, demonstrating their unique value
            proposition and highlighting their qualifications. Whether it's web
            development, graphic design, writing, or any other skill, there's a
            project waiting for your expertise. Get started today by browsing
            available projects and crafting compelling proposals. Show clients
            why you're the perfect fit for their project, and take the next step
            towards building successful collaborations. Unlock your potential
            and grow your freelance career on Hire Helping Hand. Log in now and
            start creating proposals that set you apart!
          </H6>
          {/* login button */}
          <FormElementContainer>
            <ButtonPrimary>Login</ButtonPrimary>
          </FormElementContainer>
          {/* signup button */}
          <FormElementContainer>
            <ButtonPrimary>Signup</ButtonPrimary>
          </FormElementContainer>
        </Section>
      </main>
    </div>
  );
}
