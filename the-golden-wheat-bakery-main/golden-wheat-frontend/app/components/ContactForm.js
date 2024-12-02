"use client";

import { useState } from "react";

export default function ContactForm() {
  // State for username and its error text
  const [userName, setUserName] = useState("");
  const [userNameErrorText, setUserNameErrorText] = useState("");

  // State for email and its error text
  const [email, setEmail] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");

  // State for question and its error text
  const [question, setQuestion] = useState("");
  const [questionErrorText, setQuestionErrorText] = useState("");

  // State for form validity
  const [isFormValid, setIsFormValid] = useState(false);

  // State for form data (for displaying results after submission)
  const [formData, setFormData] = useState(null);

  // State for Showing the Popup
  const [showPopup, setShowPopUp] = useState(false);

  // Validate the entire form
  const validateForm = () => {
    const userNameValidity = userName.length >= 3;
    const emailValidity = email.length === 0 || /\S+@\S+\.\S+/.test(email);
    const questionValidity = question.length >= 3;

    // Set form validity based on all fields
    setIsFormValid(userNameValidity && emailValidity && questionValidity);
  };

  // Validate username
  const validateUserName = (value) => {
    if (value.length === 0) {
      setUserNameErrorText("Name is required");
    } else if (value.length > 0 && value.length < 3) {
      setUserNameErrorText(
        "Name must be greater than or equal to 3 characters"
      );
    } else {
      setUserNameErrorText("");
    }
    validateForm();
  };

  // Validate email
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

  // Validate question
  const validateQuestion = (value) => {
    if (value.length === 0) {
      setQuestionErrorText("Question/Comment is required");
    } else if (value.length > 0 && value.length < 3) {
      setQuestionErrorText(
        "Question must be greater than or equal to 3 characters"
      );
    } else {
      setQuestionErrorText("");
    }
    validateForm();
  };

  // Handle username change
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
    validateUserName(value);
  };

  // Handle email change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  // Handle question change
  const handleQuestionChange = (e) => {
    const value = e.target.value;
    setQuestion(value);
    validateQuestion(value); // Validate the question as the user types
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      username: userName,
      email: email || "N/A", // If email is not provided, display "N/A"
      question,
    });
    setShowPopUp(true); // Shows the popup after the from is submitted and if successful
    // Optionally, reset form after submission
    // setUserName('');
    // setEmail('');
    // setQuestion('');

    setTimeout(() => setShowPopUp(false), 3000); // Popup will disapear after a couple of seconds if user does not close it
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 text-white bg-orange-200">
      <div className="flex flex-wrap justify-center w-full gap-8 lg:flex-nowrap">
        {/* Form Section */}
        <div className="w-full max-w-md p-6 bg-yellow-900 rounded-lg shadow-lg">
          <h1 className="mb-6 text-2xl font-bold text-center text-yellow-500">
            Contact Form
          </h1>
          <p className="mb-6 font-bold text-yellow-500">
            Welcome to the Golden Wheat Contact Us page! We are here to assist
            you with any questions, comments, or feedback you may have. Whether
            you are inquiring about our products, services, or just want to
            share your thoughts, this is the place to reach out. Simply fill out
            the form with your details and message, and our team will get back
            to you as soon as possible. We value your input and look forward to
            hearing from you!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-2 font-semibold">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={userName}
                className={`w-full p-2 bg-white text-black border rounded focus:outline-none focus:ring focus:ring-blue-500 
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
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className={`w-full p-2 bg-white text-black border rounded focus:outline-none focus:ring focus:ring-blue-500 
                  ${
                    emailErrorText
                      ? "border-red-500"
                      : email && !emailErrorText
                      ? "border-green-500"
                      : "border-gray-700"
                  }`}
                onChange={handleEmailChange}
              />
              {emailErrorText && (
                <p className="mt-2 text-sm text-red-500">{emailErrorText}</p>
              )}
            </div>

            <div>
              <label htmlFor="question" className="block mb-2 font-semibold">
                Question/Comment:
              </label>
              <input
                type="text"
                id="question"
                value={question}
                className={`w-full p-4 bg-white text-black border rounded focus:outline-none focus:ring focus:ring-blue-500 
                  ${
                    questionErrorText
                      ? "border-red-500"
                      : question && !questionErrorText
                      ? "border-green-500"
                      : "border-gray-700"
                  } text-left`}
                onChange={handleQuestionChange}
              />
              {questionErrorText && (
                <p className="mt-2 text-sm text-red-500">{questionErrorText}</p>
              )}
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded ${
                isFormValid
                  ? "bg-green-400 text-black cursor-pointer"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Submit
            </button>
          </form>
        </div>

        {showPopup && (
          <div className="fixed z-50 flex items-center justify-center bg-black bg-opacity-50 insert-0">
            <div className="p-6 text-center bg-white rounded-lg shadow-lg w-72">
              <h2 className="text-xl font-bold text-green-600">Success!</h2>
              <p className="text-black">
                Your Question/Feedback has been successfully sent. We will get
                back to you as soon as possible.
              </p>
              <button
                className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-700"
                onClick={() => setShowPopUp(false)}
              >
                close
              </button>
            </div>
          </div>
        )}

        {/* Results Section */}
        {/* <div className="flex flex-col items-center justify-start w-full p-4">
          <div className="mb-8 text-center">
            <h1>Golden Wheat Contact Us</h1>
            <p>
              Welcome to the Golden Wheat Contact Us page! We are here to assist
              you with any questions, comments, or feedback you may have.
              Whether you are inquiring about our products, services, or just
              want to share your thoughts, this is the place to reach out.
              Simply fill out the form with your details and message, and our
              team will get back to you as soon as possible. We value your input
              and look forward to hearing from you!
            </p>
          </div> */}

        {/* Contact Form Section */}
        <div className="w-full max-w-md p-6 bg-yellow-900 rounded-lg shadow-lg">
          <img
            src="/images/alvaro-serrano-hjwKMkehBco-unsplash.jpg"
            alt="Contact photo"
            className="w-full h-auto mb-4"
          />
          <h2 className="mb-4 text-xl font-bold text-yellow-500">
            Contact Results
          </h2>
          {formData ? (
            <div>
              <p className="mb-2">
                <span className="font-semibold">Username:</span>{" "}
                {formData.username}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Email:</span> {formData.email}
              </p>
              <p>
                <span className="font-semibold">Question/Comment:</span>{" "}
                {formData.question}
              </p>
            </div>
          ) : (
            <p className="text-gray-400">No question/comments to show.</p>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}
