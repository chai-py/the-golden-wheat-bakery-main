"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import Router from "next/router";

export default function RegistrationForm() {
  // Add state for username and usernameErrorText
  const [userName, setUserName] = useState("");
  const [userNameErrorText, setUserNameErrorText] = useState("");

  // Add state for password and passwordErrortext
  const [password, setPassword] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");

  // Extra - add state for email and emailErrorText
  const [email, setEmail] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");

  // Add state for isFormValid
  const [isFormValid, setIsFormValid] = useState(false);

  // Add function to validateForm
  const validateForm = () => {
    const userNameValidatity = userName.length >= 3;
    const passwordValidity = password.length >= 8;
    const emailValidatity = email.length === 0 || /\S+@\S+\.\S+/.test(email);

    setIsFormValid(userNameValidatity && passwordValidity && emailValidatity);
  };

  // Add function to validate username
  const validateUserName = (value) => {
    if (value.length === 0) {
      setUserNameErrorText("Name is required");
    } else if (value.length > 0 && value.length < 3) {
      setUserNameErrorText(
        "Name must be greater then or equal to 3 characters"
      );
    } else {
      setUserNameErrorText("");
    }
    validateForm();
  };

  // Add function to validate password
  const validatePassword = (value) => {
    if (value.length === 0) {
      setPasswordErrorText("Password is required");
    } else if (value.length > 0 && value.length < 8) {
      setPasswordErrorText(
        "Password must be greater then or equal to 8 characters"
      );
    } else {
      setPasswordErrorText("");
    }
    validateForm();
  };

  // Extra add function to validate email
  const validateEmail = (value) => {
    if (value.length > 0 && !/\S+@\S+\.\S+/.test(value)) {
      setEmailErrorText("Email must be a valid email address");
    } else {
      setEmailErrorText("");
    }
    validateForm();
  };

  // Add function to handle username change
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
    validateUserName(value);
  };

  // Add function to handle password change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  // Extra - Add function to handle email value change
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  // Create a handleSubmitFunction
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      validateForm();
      const response = await fetch(
        "https://golden-wheat-backend-ocs3ziby4-aashitas-projects-5cef0c8d.vercel.app/user/login",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("response", response);
      const responsedata = await response.json();
      console.log("data", responsedata);
    } catch (error) {
      console.error("Erorr fethcing data");

      if (responsedata.message === "User created succesfully") {
        Cookies.set("userToken", responsedata.token, { expires: 7 });
        Cookies.set("name", userName, { expires: 7 });
        localStorage.setItem("isLoggedIn", true);
        setFormDataToShow(data.message);
        Router.push("/");
      } else {
        console.error("Error:", responsedata.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 text-white bg-card-beige">
      <div className="flex flex-wrap justify-center w-full gap-8 lg:flex-nowrap">
        {/* Form Section */}
        <div className="w-full max-w-md p-6 bg-charcoal-gray rounded-lg shadow-lg">
          <h1 className="mb-6 text-2xl font-bold text-center text-yellow-500">
            Log In
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-2 font-semibold">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={userName}
                className={`w-full p-2 bg-gray-900 text-white border rounded focus:outline-none focus:ring focus:ring-blue-500
                  ${
                    userNameErrorText
                      ? "border-red-500"
                      : userName && !userNameErrorText
                      ? "border-green-500"
                      : "border-gray-700"
                  }`}
                onChange={handleUsernameChange}
              />
              {userNameErrorText && (
                <p className="mt-2 text-sm text-red-500">{userNameErrorText}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email (Optional):
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className={`w-full p-2 bg-gray-900 text-white border rounded focus:outline-none focus:ring focus:ring-blue-500
                  ${
                    emailErrorText
                      ? "border-red-500"
                      : email && !emailErrorText
                      ? "border-green-500"
                      : "border-gray-700"
                  }`}
                onChange={handleEmail}
              />
              {emailErrorText && (
                <p className="mt-2 text-sm text-red-500">{emailErrorText}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 font-semibold">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                className={`w-full p-2 bg-gray-900 text-white border rounded focus:outline-none focus:ring focus:ring-blue-500
                  ${
                    passwordErrorText
                      ? "border-red-500"
                      : password && !passwordErrorText
                      ? "border-green-500"
                      : "border-gray-700"
                  }`}
                onChange={handlePasswordChange}
              />
              {passwordErrorText && (
                <p className="mt-2 text-sm text-red-500">{passwordErrorText}</p>
              )}
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded ${
                isFormValid
                  ? "bg-green-400 text-black cursor-pointer"
                  : " bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
