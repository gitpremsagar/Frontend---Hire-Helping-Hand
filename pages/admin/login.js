import React from "react";
import FormElementContainer from "../../components/UI/FormElementContainer";
import InputText from "../../components/UI/InputText";
import ButtonPrimary from "../../components/UI/ButtonPrimary";
import LabelElement from "../../components/UI/LabelElement";
import H2 from "./../../components/UI/H2";

export default function LoginPage() {
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-center">
      <form
        className="shadow-xl rounded-lg lg:p-10 lg:m-20"
        onSubmit={handleLoginFormSubmit}
      >
        <H2 className={`mb-5`}>Login</H2>
        <FormElementContainer>
          <LabelElement htnlFor="email">E-mail</LabelElement>
          <InputText
            type="email"
            placeholder="E-mail"
            id="email"
            name={`email`}
          />
        </FormElementContainer>

        <FormElementContainer>
          <LabelElement htnlFor="password" className={``}>
            Password
          </LabelElement>
          <InputText
            type="password"
            placeholder="Password"
            id="password"
            name={`password`}
          />
        </FormElementContainer>
        <ButtonPrimary type="submit">Login</ButtonPrimary>
      </form>
    </div>
  );
}
