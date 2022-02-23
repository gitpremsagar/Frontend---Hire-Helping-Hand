import Head from "next/head";
import InputField from "../../components/sellService/InputField";
import TextareaField from "../../components/sellService/TextareaField";

export default function becomeFreelancer() {
  function handleChange(e) {
    console.log("changed value = ", e.target.value);
  }
  return (
    <div>
      <Head>
        <title>Sell Freelancing Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center font-bold text-4xl mt-10">
          Create new service offer
        </h1>
        <div className="p-5 grid grid-cols-3">
          {/* basic */}
          <div className="bg-green-400 serviceOfferCol">
            <h2>Basic</h2>
            <form>
              {/* service title */}
              <InputField
                type="text"
                label="Service Title"
                name="serviceTitle"
                placeholder="I will do <the service you provide>"
              />
              {/* service description */}
              <TextareaField
                name="basicOfferDetail"
                label="Freelancing service description"
                type="text"
                placeholder="Write detail of service offered by you..."
                labelClass="text-white"
                textareaClass="h-[200px]"
                handleChange={handleChange}
              />
            </form>
          </div>
          {/* silver */}
          <div className="bg-green-500 serviceOfferCol">
            <h2>Silver</h2>
          </div>
          {/* gold */}
          <div className="bg-green-600 serviceOfferCol">
            <h2>Gold</h2>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
