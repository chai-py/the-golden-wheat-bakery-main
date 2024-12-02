"use client";

// import { useRouter } from "next/router";
import { useState } from "react";

export default function RegistrationForm() {
  // const router = useRouter();
  // Add state for username and usernameErrorText
  const [userName, setUserName] = useState("");
  const [userNameErrorText, setUserNameErrorText] = useState("");

  // Add state for password and passwordErrortext
  const [password, setPassword] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");

  // Add state for confirmPassword and confirmPasswordErrorText
  const [confirmPassword, setConfrimPassword] = useState("");
  const [confrimPasswordErrorText, setConfrimPasswordErrorText] = useState("");

  // Extra - add state for email and emailErrorText
  const [email, setEmail] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");

  // Add state for isFormValid
  const [isFormValid, setIsFormValid] = useState(false);

  // State for Showing the Popup
  const [showPopup, setShowPopUp] = useState(false);

  // Add function to validateForm
  const validateForm = () => {
    const userNameValidatity = userName.length >= 3;
    const passwordValidity = password.length >= 8;
    const confrimPasswordValidity = password === confirmPassword;
    const emailValidatity = email.length === 0 || /\S+@\S+\.\S+/.test(email);

    setIsFormValid(
      userNameValidatity &&
        passwordValidity &&
        confrimPasswordValidity &&
        emailValidatity
    );
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

  // Add function to validate confirm password
  const validateConfrimPassword = (value) => {
    if (value.length === 0) {
      setConfrimPasswordErrorText("Comfrim Pasword is required");
    } else if (value.length > 0 && value.length < 8) {
      setConfrimPasswordErrorText(
        "Confirm Password: Must match the password field."
      );
    } else {
      setConfrimPasswordErrorText("");
    }
    validateForm();
  };

  // Extra add function to validate email
  const validateEmail = (value) => {
    if (value.length === 0) {
      setEmailErrorText("Email is required");
    } else if (value.length > 0 && !/\S+@\S+\.\S+/.test(value)) {
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

  // Add function to handle confirm password change
  const handleConfrimPasswordChange = (e) => {
    const value = e.target.value;
    setConfrimPassword(value);
    validateConfrimPassword(value);
  };

  // Extra - Add function to handle email value change
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  // Create a handleSubmitFunction
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

    // Reset the form fields
    setUserName("");
    setPassword("");
    setConfrimPassword("");
    setEmail("");

    // Reset the error messages
    setUserNameErrorText("");
    setPasswordErrorText("");
    setConfrimPasswordErrorText("");
    setEmailErrorText("");
    setShowPopUp(true);
    setTimeout(() => setShowPopUp(false), 8000);
  };
  return (
    <div className="bg-card-beige text-white min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 w-full justify-center">
        {/* Form Section */}
        <div className="bg-charcoal-gray p-6 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block font-semibold mb-2">
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
                <p className="text-red-500 text-sm mt-2 font-extrabold">
                  {userNameErrorText}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block font-semibold mb-2">
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
                <p className="text-red-500 text-sm mt-2 font-extrabold">
                  {passwordErrorText}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block font-semibold mb-2"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                className={`w-full p-2 bg-gray-900 text-white border rounded focus:outline-none focus:ring focus:ring-blue-500 
                  ${
                    confrimPasswordErrorText
                      ? "border-red-500"
                      : confirmPassword && !confrimPasswordErrorText
                      ? "border-green-500"
                      : "border-gray-700"
                  }`}
                onChange={handleConfrimPasswordChange}
              />
              {confrimPasswordErrorText && (
                <p className="text-red-500 text-sm mt-2 font-extrabold">
                  {confrimPasswordErrorText}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email:
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
                <p className="text-red-500 text-sm mt-2 font-extrabold">
                  {emailErrorText}
                </p>
              )}
            </div>

            <button
              onClick={() => router.push(`/login`)}
              type="submit"
              className={`w-full py-2 rounded ${
                isFormValid
                  ? "bg-green-400 text-black cursor-pointer"
                  : " bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Register
            </button>
          </form>
        </div>

        {showPopup && (
          <div className="fixed insert-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-72">
              <h2 className="text-xl font-bold text-green-600">
                Account Success!
              </h2>
              <p className="text-black">
                Your Account has been successfully made. We will send a
                notification to your email adress to comfrim your account!
              </p>
              <button
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                onClick={() => setShowPopUp(false)}
              >
                close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
