import React from "react";
import style from "../Input/style";
import Input from "../Input/Input";

export default function Form({ form }) {
  const { handleEmail, handlePass, email, password, error } = form;

  const inputs = [
    {
      htmlFor: "Email",
      type: "email",
      id: "email",
      value: email,
      onChange: handleEmail,
    },
    {
      htmlFor: "Password",
      type: "password",
      id: "password",
      value: password,
      onChange: handlePass,
    },
  ];
  return (
    <>
      {inputs.map((input, index) => (
        <Input
          key={index}
          htmlFor={input.htmlFor}
          type={input.type}
          id={input.id}
          value={input.value}
          onChange={input.onChange}
        />
      ))}
      {error && (
        <div className="h-align" style={style.red}>
          ERROR, password or email combination is incorrect
        </div>
      )}
    </>
  );
}
