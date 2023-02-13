import { frequentlyAskedQuestions } from "../../Services/frequentlyAskedQuestions";

export default function HelpAndSupportPage() {
  return (
    <div className="p-20">
      <h1 className="text-2xl font-bold mb-6">Help & Support</h1>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Frequently Asked Questions</h2>
        <ul className="list-disc">
          <li className="mb-2">
            <h3 className="text-lg font-bold">How do I sign up?</h3>
            <p className="text-base">
              To sign up, simply click the "Sign Up" button on the homepage and
              follow the prompts to create your account.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="text-lg font-bold">How do I find a freelancer?</h3>
            <p className="text-base">
              You can find freelancers by using the search bar on the homepage
              to search for specific skills or by browsing through the available
              freelancers in the "Freelancers" section.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="text-lg font-bold">
              How do I contact a freelancer?
            </h3>
            <p className="text-base">
              You can contact a freelancer by clicking on their profile and
              using the "Contact" button to send them a message.
            </p>
          </li>
          {frequentlyAskedQuestions.map((faqSet, key) => {
            return (
              <li className="mb-2" key={key}>
                <h3 className="text-lg font-bold">{faqSet.question}</h3>
                <p className="text-base">{faqSet.answer}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input className="border p-2 w-full" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input className="border p-2 w-full" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea className="border p-2 w-full" id="message"></textarea>
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
