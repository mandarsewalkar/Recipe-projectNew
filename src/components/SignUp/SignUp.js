import React, { useState, useEffect } from "react";
import style from "./style";
import Input from "../Input/Input";

export default function SignUp({ fun }) {
  const [formDataList, setFormDataList] = useState(() => {
    // Retrieve data from local storage or initialize to an empty array
    const storedData = localStorage.getItem("formDataList");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailMatch, setEmailMatch] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      Name: event.target.Name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    const isEmailTaken = formDataList.some(
      (data) => data.email === formData.email
    );
    if (isEmailTaken) {
      setEmailMatch(false);
      return;
    }

    setPasswordMatch(true);
    setEmailMatch(true);

    setFormDataList((prevFormDataList) => [...prevFormDataList, formData]);

    event.target.reset();

    console.log(formDataList);

    // Call the fun
    setTimeout(() => {
      fun();
    }, 0);
  };

  const handlePasswordChange = () => {
    setPasswordMatch(true);
  };

  const handleEmailChange = () => {
    setEmailMatch(true);
  };

  // Store formDataList in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("formDataList", JSON.stringify(formDataList));
  }, [formDataList]);

  const inputs = [
    {
      label: "Name",
      type: "text",
      id: "Name",
      onChange: null,
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      onChange: handleEmailChange,
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      onChange: handlePasswordChange,
    },
    {
      label: "Confirm Password",
      type: "password",
      id: "confirmPassword",
      onChange: handlePasswordChange,
    },
  ];

  return (
    <div className="h-align inherit " style={style.bgcWhite}>
      <div className="inherit , v-align">
        <div style={style.shadow} className="v-align">
          <h2 className="h-align">Sign Up</h2>
          <div style={style.height}>
            <form className="inherit" onSubmit={handleSubmit}>
              <div className="inherit , v-align" style={style.padding}>
                {inputs.map((input, index) => (
                  <div key={index}>
                    <Input
                      value={input.value}
                      onChange={input.onChange}
                      id={input.id}
                      type={input.type}
                      htmlFor={input.label}
                    />
                    {!emailMatch && input.id === "email" && (
                      <p style={style.error}>E-mail is already taken</p>
                    )}
                    {!passwordMatch && input.id === "confirmPassword" && (
                      <p style={style.error}>
                        Password and Confirm Password do not match.
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className="h-align">
                <button
                  type="submit"
                  style={style.but}
                  disabled={!passwordMatch || !emailMatch}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
